import React from "react";
import { useDispatch } from "react-redux";
import "./checkout-item.style.scss";
import {
  clearItemFromCart,
  removeItem,
  addToBasket,
} from "./../../redux/cart/cart.action";
function CheckoutItem({ cartItem: { imageUrl, name, price, quantity, id } }) {
  const dispatch = useDispatch();
  const clearItemFromBasket = () => {
    dispatch(clearItemFromCart({ imageUrl, name, price, quantity, id }));
  };
  const removeItemFromBasket = () => {
    dispatch(removeItem({ imageUrl, name, price, quantity, id }));
  };
  const addItemToBasket = () => {
    dispatch(addToBasket({ imageUrl, name, price, quantity, id }));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromBasket()}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToBasket}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromBasket}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
