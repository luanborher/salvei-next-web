/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { localStorageKeys } from '@/utils/localStorageKeys';

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface ILoginResponse {
  jwt: string;
  refreshToken: string;
  user: User;
}

interface IUserProvider {
  user: User;
  isAuthenticated: boolean;
  setUser: React.Dispatch<SetStateAction<User>>;
  logout: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  // const pathname = usePathname();

  useEffect(() => {
    const dataUser = localStorage.getItem(localStorageKeys.user);

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }

    setLoading(false);
  }, []);

  const isAuthenticated = !!user?.id;

  const logout = () => {
    localStorage.removeItem(localStorageKeys.user);
    localStorage.removeItem(localStorageKeys.accessToken);
    localStorage.removeItem(localStorageKeys.refreshToken);

    setUser({} as User);
  };

  // const publicRoutes = ['/'];

  if (loading) {
    return null;
  }

  // if (!isAuthenticated && !publicRoutes.includes(pathname)) {
  //   redirect('/');
  // }

  // if (isAuthenticated && publicRoutes.includes(pathname) && pathname === '/') {
  //   redirect('/empreendimentos');
  // }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
