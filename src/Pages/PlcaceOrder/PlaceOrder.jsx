import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place_order">
      <div className="place_order_left">
        <p className="title">Delivery information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Street" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place_order_right">
        <div className="cart_total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart_total_detail">
              <p>Subtotal</p>
              <p> {getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cart_total_detail">
              <p>Delivery Fee</p>
              <p> ${getTotalCartAmount() === 0 ? 0 : 2} </p>
            </div>
            <hr />
            <div className="cart_total_detail">
              <p>Total</p>
              <p>
                {" "}
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}{" "}
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed to payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
