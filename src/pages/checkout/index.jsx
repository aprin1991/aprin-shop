import React, { useState } from "react";
import "./checkout.style.scss";
import { useSelector } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item";
import StripeButton from "./../../components/stripe-button";
function CheckoutPage() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const calcTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, cardItem) => acc + cardItem?.quantity * cardItem?.price,
      0
    );
    return totalPrice;
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems?.map((cart) => (
        <CheckoutItem cartItem={cart} key={cart?.id} />
      ))}
      <div className="total">
        <span>TOTAL: ${calcTotalPrice()}</span>
      </div>
      <div className="pay-btn">
        <StripeButton price={calcTotalPrice()} />
      </div>
    </div>
  );
}

export default CheckoutPage;
