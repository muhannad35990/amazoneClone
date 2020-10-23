import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import banner from "../images/banner.jpg";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={banner} className="banner" alt="" />
        <div className="checkout__title">Your shopping Bascket</div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
