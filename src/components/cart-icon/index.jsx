import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CartIcon({ handleClick }) {
  const state = useSelector((state) => state);
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{selectCartItemsCount(state)}</span>
    </div>
  );
}

export default CartIcon;
