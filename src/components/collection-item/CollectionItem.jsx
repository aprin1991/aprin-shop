import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../custom-button";
import "./collection-item.scss";
import { addToBasket } from "../../redux/cart/cart.action";
function CollectionItem({ item: { name, imageUrl, price, id } }) {
  const dispatch = useDispatch();
  const handleAddToBasket = () => {
    const items = { name, imageUrl, price, id };
    dispatch(addToBasket(items));
  };
  return (
    <div className="collection-item">
      <img src={imageUrl} alt="" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        classes="collection-custom-button"
        onClick={handleAddToBasket}
        inverted
        collection
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
