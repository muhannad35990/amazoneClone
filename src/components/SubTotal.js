import React, { useState } from "react";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./SubTotal.css";
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        subtotal ({basket.length} items):{" "}
        <strong>{getBasketTotal(basket)} $</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
