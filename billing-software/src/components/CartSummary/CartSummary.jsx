import React, { useContext } from "react";
import "./CartSummary.css";
import { AppContext } from "../../context/AppContext";
import ReceiptPopup from "../ReceiptPopup/ReceiptPopup";

const CartSummary = ({
  cutomerName,
  mobileNumber,
  setCustomerName,
  setMobileNumber,
}) => {
  const { cartItems } = useContext(AppContext);
  const totalAmout = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = totalAmout * 0.18;

  const grandTotal = tax + totalAmout;
  return (
    <div className="mt-2">
      <div className="cart-summary-details">
        <div className="d-flex justify-content-between mb-1">
          <span className="text-light">Item : </span>
          <span className="text-light">{totalAmout.toFixed(2)} </span>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <span className="text-light">Tax (18%)</span>
          <span className="text-light">{tax.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <span className="text-light">Total :</span>
          <span className="text-light">{grandTotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-success flex-grow-1">
          Cash
        </button>
        <button className="btn btn-primary flex-grow-1">
          UPI
        </button>
      </div>
      <div className="d-flex mt-2 gap-3">
        <button className="btn btn-warning flex-grow-1">
          Place Order
        </button>
      </div>
      {/* <ReceiptPopup/> */}
    </div>
  );
};

export default CartSummary;
