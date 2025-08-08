import { createContext, useState } from "react";

const CartContext = createContext([[], () => {}]);

export const CartContextProvider = ({children}) => {
  return (
    <CartContext.Provider value={useState([])}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext };
