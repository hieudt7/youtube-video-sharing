'use client';
import type { ReactNode } from 'react';
import { useContext, useState, createContext, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import { login, register, type UserInfo } from '@/services/authentication';

type AuthProviderProps = {
    children: ReactNode;
};

interface AuthContextType {
    isAuthenticated: boolean;
    user: Partial<UserInfo> | null;
    signIn: (email: string, password: string) => void;
    signUp: (email: string, password: string, username: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    signIn: () => undefined,
    signUp: () => undefined,
    signOut: () => undefined,
});

export const AuthContextProvider = ({ children }: AuthProviderProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        JSON.parse(localStorage.getItem('userLogged')!) ? true : false //TODO: check isauthenticated if get user have data
    );
    const [user, setUser] = useState<UserInfo | null>(JSON.parse(localStorage.getItem('userLogged')!)); //TODO: set token from BE using JWT

    const handleSignedIn = (data: UserInfo) => {
        setUser(data);
        setIsAuthenticated(true);
    };

    const signOut = () => {
        //TODO: handle refresh token from BE
        localStorage.removeItem('userLogged');
        setUser(null);
        setIsAuthenticated(false);
        window.location.reload();
    };

    const signIn = useCallback(
        async (email: string, password: string) => {
            try {
                const loginResponse = await login({
                    payload: {
                        email,
                        password,
                    },
                });
                if (loginResponse) {
                    handleSignedIn(loginResponse);
                } else {
                    toast.error('Something went wrong! Please try again.');
                }
            } catch (error) {
                console.log(error);
                toast.error('Login failed! Check email and password.'); //TODO handle error message from sever
            } finally {
            }
        },
        [handleSignedIn]
    );

    const signUp = useCallback(
        async (email: string, password: string, username: string) => {
            try {
                const registerResponse = await register({
                    payload: {
                        email,
                        password,
                        username,
                    },
                });
                if (registerResponse) {
                    toast.success('Registration successful');
                    signIn(registerResponse.email, registerResponse.password); //TODO use BE response to login
                } else {
                    toast.error('Something went wrong! Please try again.');
                }
            } catch (error) {
                toast.error('User already exists.'); //TODO handle error message from sever
            } finally {
            }
        },
        [handleSignedIn]
    );

    const providerValue = useMemo(
        () => ({
            isAuthenticated,
            user,
            signIn,
            signUp,
            signOut,
        }),
        [isAuthenticated, user]
    );

    return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
