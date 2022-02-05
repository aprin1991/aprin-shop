import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.scss";
import { Link } from "react-router-dom";

function CollectionPreview({ title, items, id }) {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${title}`}>
        <h1 className="title">{title?.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items?.slice(0, 4)?.map((item) => {
          return <CollectionItem key={item?.id} item={item} />;
        })}{" "}
      </div>
    </div>
  );
}

export default CollectionPreview;
