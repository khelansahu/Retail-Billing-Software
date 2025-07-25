import React, { useContext, useState } from "react";
import "./Explore.css";
import { AppContext } from "../../context/AppContext";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory";
import DisplayItem from "../../components/DisplayItem/DisplayItem";
import CustomerForm from "../../components/CustomerForm/CustomerForm";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
const Explore = () => {
  const {category}  = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  console.log(category);
  // console.log("hiii")
  return (
    <div className="explore-container text-light">
      <div className="left-column">
        <div className="first-row" style={{ overflow: "auto" }}>
          <DisplayCategory 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          category={category}/>
        </div>
        <hr className="horizontal-line" />
        <div className="second-row" style={{ overflow: "auto" }}>
          <DisplayItem/>
        </div>
      </div>
      <div className="right-column d-flex flex-column">
        <div className="customer-form-container" style={{ height: "15%" }}>
          <CustomerForm/>
        </div>
        <hr className="my-3 text-light" />
        <div
          className="cart-items-container"
          style={{ height: "55%", overflowY: "auto" }}
        >
          <CartItem/>
        </div>
        <div className="cart-summary-container" style={{ height: "30%" }}>
          <CartSummary/>
        </div>
      </div>
    </div>
  );
};

export default Explore;
