import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Total</p>
          <p>Quanttity</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                {" "}
                {/* Added key prop here */}
                <div className="cart_items_title cart_item_items">
                  <img src={item.image} alt="" />
                  <p> {item.name} </p>
                  <p> ${item.price} </p>
                  <p> {cartItems[item._id]} </p>
                  <p> ${item.price * cartItems[item._id]} </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}

        <div className="cart_bottom">
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
                <p> ${2} </p>
              </div>
              <hr />
              <div className="cart_total_detail">
                <p>Total</p>
                <p> {getTotalCartAmount() + 2} </p>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed to Checkout
            </button>
          </div>
          <div className="cart_promocode">
            <div>
              <p>IF U HAVE A PROMO CODE , ENTER IT HERE </p>
              <div className="cart_promocode_input">
                <input type="text" name="" id="" placeholder="promocode" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
