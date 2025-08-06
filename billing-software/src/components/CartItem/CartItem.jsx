import React, { useContext } from 'react'
import "./CartItem.css"
import { AppContext } from '../../context/AppContext'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
const CartItem = () => {
  const {cartItems, removeFromCart, updateQuantity}=useContext(AppContext);
  
// console.log("from cart item component",cartItems)
  return (
    <div className="p-3 h-100 overflow-y-auto">
      {
        cartItems.length === 0?(<p className='text-light'>Your cart is empty</p>):(
          <div className="cart-items-list">
            {cartItems.map((item,index)=> (
              <div key={index} className="cart-item mb-3 p-3 bg-dark rounded">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0 text-light">
                    {item.name}
                  </h6>
                  <p className="mb-0 text-light">
                    {(item.price*item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <div className="d-flex align-items-center gap-2">
                    <button className='btn btn-danger btn-sm' onClick={()=>updateQuantity(item.itemId, item.quantity - 1)}
                    disabled={item.quantity===1}>
                      <i><FaMinus /></i>
                    </button>
                    <span className='text-light'>{item.quantity}</span>
                    <button className="btn btn-primary btn-sm" onClick={()=>updateQuantity(item.itemId, item.quantity + 1)}>
                      <i><FaPlus /></i>
                    </button>
                   
                  </div>
                   <button className="btn btn-danger btn-sm" style={{width:"auto"}}
                   onClick={()=>removeFromCart(item.itemId)}>
                      <i><FaTrash /></i>
                    </button>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default CartItem