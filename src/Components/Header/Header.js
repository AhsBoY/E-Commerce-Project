import React from 'react';
import { a, NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"    /* src er image file theke image take access kora  */
import "./Header.css"

const Header = () => {
    return (
        <div className = "header">
            <img src= {logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;