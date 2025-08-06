import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../Service/CategoryService";
import { fetchItem } from "../Service/ItemService";

// Create context
export const AppContext = createContext(null);

// Create Provider component
export const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [item, setItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.itemId !== itemId));
  };
  const updateQuantity = (itemId,newQuantity) => {
    setCartItems(cartItems.map(item=>item.itemId===itemId ? {...item, quantity:newQuantity} : item))
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await fetchCategories();
      const itemResponse = await fetchItem();

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
    addToCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
