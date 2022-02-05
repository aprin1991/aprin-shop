import React from "react";
import "./MenuItem.style.scss";
import { Link, useNavigate } from "react-router-dom";
const MenuItem = ({ title, image, size = "", id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => navigate(`/shop/${title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="content">
        <h1 className="title">{title?.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
