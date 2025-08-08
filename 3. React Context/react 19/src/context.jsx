import { createContext, useState } from "react";

const CartContext = createContext([[], () => {}]);

export const CartContextProvider = ({children}) => {
  return (
    <CartContext value={useState([])}>
        {children}
    </CartContext>
  )
}

export { CartContext };
