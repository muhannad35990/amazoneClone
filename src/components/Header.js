import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/k.jpg";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Header.css";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="navBar_custem">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="search__box">
        <input type="text" />
        <Button className="search__btn">
          <SearchIcon />
        </Button>
      </div>
      <div className="nav_rightSide">
        <div className="nav__rightSide_item">
          <Link to="/login" className="link">
            <small>Hello, {user?.Email} </small>
            <span>{user ? "signout" : "signin"}</span>
          </Link>
          <div className="account_list_arrown">
            <span className="font__bold">Account & Lists</span>
            <div>
              <ArrowDropDownIcon />{" "}
            </div>
          </div>
        </div>

        <div className="nav__rightSide_item">
          <small>Returns</small>
          <p className="font__bold">& Orders</p>
        </div>

        <div className="nav__rightSide_item cart ">
          <Link to="/checkout">
            <AddShoppingCartIcon />
          </Link>

          <span className="orange__font__color font__bold">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
