export const setCurrentPage = (tab: string) => {
    return {
      type: 'SET_CURRENT_TAB',
      payload: tab,
    } as const;
  };
  
  export type CurrentPageAction = ReturnType<typeof setCurrentPage>;