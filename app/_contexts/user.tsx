"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  username: string | null;
  profileCreated: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  setProfileCreated: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [profileCreated, setProfileCreated] = useState<boolean>(false);

  const contextValue = {
    username,
    setUsername,
    profileCreated,
    setProfileCreated,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
