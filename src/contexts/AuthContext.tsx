import { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { api } from "../services/api";

interface User {
  user: string;
  token: string;
  isAuthenticated: boolean;
  logOut: () => void;
  signIn: (username: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as User);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['byebnk@token']);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const tokenString = cookies['byebnk@token']
    
    if (!tokenString) {
      return false;
    } else {
      setToken(tokenString || '');
      return true;
    }
  });
  

  useEffect(() => {
    const tokenString = cookies['byebnk@token']

    if (!tokenString) {
      setIsAuthenticated(false);
    } else {
      setToken(tokenString || '');
      setIsAuthenticated(true);
    }
  }, [cookies]);

  function logOut() {
    removeCookie('byebnk@token');
    setUser('');
    setToken('')
    setIsAuthenticated(false)
  }

  async function signIn(username: string, password: string) {
    try {
      const { data } = await api.post('/v1/usuarios/token/obter/', {
        username,
        password,
      });

      const { token }: any = data

      setCookie('byebnk@token', token)
      setToken(token)
      setUser(username)
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      logOut,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}