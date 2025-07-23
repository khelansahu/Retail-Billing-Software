import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CategoryService";

// Create context
export const AppContext = createContext(null);

// Create Provider component
export const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchCategories();
      setCategory(response.data.dataList);
    };

    loadData();
  }, []);

  const contextValue = {
    category,
    setCategory,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
