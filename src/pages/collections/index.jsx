import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";
import ShopData from "../shop/shop.data";
import "./collections.style.scss";
function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const { collections } = useSelector((state) => state?.shop);
  useEffect(() => {
    collections.forEach((item) => {
      if (item?.title?.toLowerCase() === id?.toLowerCase()) {
        setTitle(item?.title);
        setProducts(item?.items);
      }
    });
  }, []);
  return (
    <div className="collection-page">
      <h2 className="title"> {title}</h2>
      <div className="items">
        {products?.map((item) => (
          <CollectionItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
