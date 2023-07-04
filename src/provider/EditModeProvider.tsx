import React, { createContext, useState } from "react";

export const EditModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditModeChange = (checked: boolean) => {
    setEditMode(checked);
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
  handleEditModeChange: (checked: boolean) => void;
}

const defaultEditModeContext: EditModeContextProps = {
  editMode: false,
  handleEditModeChange: () => {},
};

export const EditModeContext = createContext<EditModeContextProps>({
  editMode: false,
  handleEditModeChange: () => {},
});
