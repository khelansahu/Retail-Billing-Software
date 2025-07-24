import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CategoryService";
import { fetchItem } from "../Service/ItemService";

// Create context
export const AppContext = createContext(null);

// Create Provider component
export const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchCategories();
      const itemResponse=await fetchItem();

      setCategory(response.data.dataList);
      setItem(itemResponse.data.dataList);
    };

    loadData();
  }, []);

  const contextValue = {
    category,
    setCategory,
    item,
    setItem,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
