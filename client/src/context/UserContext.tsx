import React, { createContext, useState } from 'react';
import User from "../types/User"
import { Outlet } from 'react-router-dom';

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
  };
  
  export const UserContext = createContext<UserContextType>({
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUser: () => {},
  });
  
  export const UserProvider = (props: any) => {
    const [user, setUser] = useState<User | null>(null);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    );
  };