import React, { useContext } from "react";
import "./Item.css";
import { MdCurrencyRupee } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AppContext } from "../../context/AppContext";
const Item = ({ itemName, itemPrice, itemImage, itemId }) => {
const {addToCart}=useContext(AppContext);

const handleAddToCart=()=>{
  addToCart({
    name:itemName,
    price:itemPrice,
    quantity:1,
    itemId:itemId
  })
}
  return (
    <div className="p-3 bg-dark rounded shadow-sm h-100 d-flex align-items-center item-card">
      <div style={{ position: "relative", marginRight: "15px" }}>
        <img
          src={`data:image/jpeg;base64,${itemImage}`}
          alt={itemName}
          className="item-image"
        />
      </div>
      <div className="flex-grow-1 ms-2">
        <h6 className="mb-1 text-light">{itemName}</h6>
        <p className="mb-0 fw-bold text-light">
          <MdCurrencyRupee />
          {itemPrice}
        </p>
      </div>
      <div
        className="d-flex flex-column justify-content-between align-items-center ms-2"
        style={{ height: "100%" }}
      >
        <i>
          <MdOutlineAddShoppingCart
            style={{ color: "yellow", fontSize: "24px" }}
          />
        </i>
        <button className="btn btn-success btn-sm" onClick={handleAddToCart}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Item;
