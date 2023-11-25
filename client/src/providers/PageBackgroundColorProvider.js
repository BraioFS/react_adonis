import { createContext, useContext, useState } from 'react';

const PageBackgroundColorContext = createContext();

export const PageBackgroundColorProvider = ({ children }) => {
  const [pageBackgroundColor, setPageBackgroundColor] = useState('');

  const handleHover = (color) => {
    setPageBackgroundColor(color);
  };

  return (
    <PageBackgroundColorContext.Provider value={{ pageBackgroundColor, handleHover }}>
      {children}
    </PageBackgroundColorContext.Provider>
  );
};

export const usePageBackgroundColor = () => {
  const context = useContext(PageBackgroundColorContext);
  if (!context) {
    throw new Error('usePageBackgroundColor must be used within a PageBackgroundColorProvider');
  }
  return context;
};
