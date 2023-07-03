import React, { createContext, useState } from "react";

type Role = "TRAINEE" | "TRAINER" | "";

type ProviderProps = {
  children: React.ReactNode;
};

type ProviderContext = {
  role: Role;
  setRole: (role: Role) => void;
};

const defaultProviderContext: ProviderContext = {
  role: "",
  setRole: () => {},
};

export const AppProviderContext = createContext<ProviderContext>(
  defaultProviderContext
);

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [role, setRole] = useState<Role>(defaultProviderContext.role);

  const value: ProviderContext = {
    role,
    setRole,
  };

  return (
    <AppProviderContext.Provider value={value}>
      {children}
    </AppProviderContext.Provider>
  );
};
