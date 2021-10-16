import React from 'react';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from "../../images/logo.png"    /* src er image file theke image take access kora  */
import "./Header.css"

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className = "header">
            <img src= {logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email && <span style = {{color:"white" , marginRight: "10px"}}>{user.displayName}</span>
                }
                {
                    user.email ?
                    <button onClick= {logOut}>LogOut</button>
                    :
                    <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;