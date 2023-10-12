'use client';

import { useContext, useState, createContext, useEffect, useMemo } from 'react';

import type { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { WEB_SOCKET, WEB_SOCKET_ROOM } from '@/utils/constants/envVars';
const socketConnect = WEB_SOCKET ?? '/';

type AuthProviderProps = {
  children: ReactNode;
};

interface WebSocketType {
  socket: any;
  room: string;
}

const WebSocket = createContext<WebSocketType>({
  socket: null,
  room: '',
});

export const WebSocketProvider = ({ children }: AuthProviderProps) => {
  const [socket] = useState(io(socketConnect));
  const [room] = useState(WEB_SOCKET_ROOM ?? ''); //TODO get room from sever case load balancing

  useEffect(() => {
    socket.emit('join_room', room);
    console.log('join room', room);
  }, []);

  const providerValue = useMemo(
    () => ({
      socket,
      room,
    }),
    [socket, room],
  );

  return (
    <WebSocket.Provider value={providerValue}>{children}</WebSocket.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocket);
