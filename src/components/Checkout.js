import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import banner from "../images/banner.jpg";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={banner} className="banner" alt="" />
        <div className="checkout__title">Your shopping Bascket</div>
        <div className="checkout__items">
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
