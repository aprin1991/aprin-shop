import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "./../custom-button";
import { useSelector } from "react-redux";
import CartItem from "../cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
function CartDropDown({ close }) {
  const cartItems = useSelector((state) => selectCartItems(state));
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.length > 0 ? (
          cartItems?.map((el) => <CartItem key={el?.id} item={el} />)
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      {cartItems?.length > 0 && (
        <CustomButton onClick={() => (navigate("/checkout"), close())}>
          Go To Checkout
        </CustomButton>
      )}
    </div>
  );
}

export default CartDropDown;
