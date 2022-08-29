import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} price={item.price} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <>
      <header>
        <Link to="/images">
          <h2>한국의 이미지</h2>
        </Link>
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </header>
      <main className="cart-page">
        <h1>Check out</h1>
        <div className="cart-item-wrapper">{cartItemElements}</div>

        <p className="total-cost">Total: {totalCostDisplay}</p>
        {cartItems.length > 0 ? (
          <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
          </div>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </main>
    </>
  );
}

export default Cart;
