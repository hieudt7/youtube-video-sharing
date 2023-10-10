'use client';
import { useContext, useState, createContext, useCallback } from 'react';
import { toast } from 'react-toastify';
import { login, type UserInfo } from '@/services/authentication';

import type { ReactNode } from 'react';

type AuthProviderProps = {
    children: ReactNode;
};

interface AuthContextShape {
    isAuthenticated: boolean;
    user: Partial<UserInfo> | null;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextShape>({
    isAuthenticated: false,
    user: null,
    signIn: () => undefined,
    signOut: () => undefined,
});

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        JSON.parse(localStorage.getItem('userLogged')!) ? true : false
    );
    const [user, setUser] = useState<UserInfo | null>(JSON.parse(localStorage.getItem('userLogged')!)); //mock user from localstorage instead of token

    const handleSignedIn = (data: UserInfo) => {
        setUser(data);
        setIsAuthenticated(true);
    };
    const signOut = () => {
        setUser(null);
        setIsAuthenticated(false);
    };
    const signIn = useCallback(
        async (email: string, password: string) => {
            try {
                const loginResponse = await login({
                    payload: {
                        email: email,
                        password: password,
                    },
                });
                if (loginResponse) {
                    handleSignedIn(loginResponse);
                } else {
                    toast.error('Something went wrong! Please try again.');
                }
            } catch (error) {
                toast.error('Login failed! Check email and password.');
            } finally {
            }
        },
        [handleSignedIn]
    );
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
