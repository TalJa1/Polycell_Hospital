import React, { createContext, useState } from "react";

export const EditModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditMode(event.target.checked);
  };

  const contextValue: EditModeContextProps = {
    editMode,
    handleEditModeChange,
  };

  return (
    <EditModeContext.Provider value={contextValue}>
      {children}
    </EditModeContext.Provider>
  );
};

interface EditModeContextProps {
  editMode: boolean;
  handleEditModeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultEditModeContext: EditModeContextProps = {
    editMode: false,
    handleEditModeChange: () => {},
  };

  export const EditModeContext = createContext<EditModeContextProps>(
    defaultEditModeContext
  );
