import { useState, useContext } from "react";
import { CartContext } from "./../context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [ cart ] = useContext(CartContext);

  const clickHandler = () => {
    setShowCart(!showCart);
  }

  return (    
  <>
    <h1>Foodies App</h1>
    <span className="cart" onClick={clickHandler}>🛒 ({cart.length})</span>

    {showCart && cart.length > 0 && (
        <ul className="cart-items">
          {cart.map(cartItem => {
            return <li key={cartItem.id}>{cartItem.name} ({cartItem.quantity})</li>
          })}
        </ul>
      )}
  </>
  )
}

export default Header;
