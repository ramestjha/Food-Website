import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Renamed to cartItems

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newItems = { ...prev };
      if (newItems[itemId] === 1) {
        delete newItems[itemId];
      } else {
        newItems[itemId] -= 1;
      }
      return newItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        
        let itemInfo = food_list.find((product) => product._id === itemId);
  
        
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    
    return totalAmount;
  };
  

  const contextValue = {
    food_list,
    cartItems, // Updated here
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
