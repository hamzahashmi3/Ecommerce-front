import React, {Fragment} from 'react';
import { Link, withRouter } from "react-router-dom";
import {signout, isAuthenticated} from '../Auth/Index';
import { itemTotal } from "./CartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#7fad39" };
    } else {
        return { color: "#252525" };
    }
};


function Menu({history}) {
    return (
        <div>
            
            <div className="Home">
                <div class="humberger__menu__overlay"></div>
                <header class="header">
                    <div class="header__top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="header__top__left">
                                        <ul>
                                            <li>
                                                <i class="fa fa-envelope"></i>
                                                <Link to="#" class="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">[email&#160;protected]</Link>
                                            </li>
                                            <li>Free Shipping for all Order of $99</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="header__top__right">
                                        <div class="header__top__right__social">
                                            <Link to="#">
                                                <i class="fa fa-facebook"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-twitter"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-linkedin"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-pinterest-p"></i>
                                            </Link>
                                        </div>
                                        <div class="header__top__right__language">
                                            <img src="img/language.png" alt="" />
                                            <div>English</div>
                                        </div>
                                        {!isAuthenticated() && (
                                            <Fragment>
                                                <div class="header__top__right__auth">
                                                    <Link to="/signin" style={isActive(history, "/signin")}>
                                                        Login 
                                                    </Link>
                                                </div>
                                                <span style={{margin:"5px"}}><i class="fa fa-user"></i></span>
                                                <div class="header__top__right__auth">
                                                    <Link to="/signup" style={isActive(history, "/signup")}>
                                                         SignUp
                                                    </Link>
                                                </div>
                                            </Fragment>
                                        )}
                                        {isAuthenticated() && (
                                                <div class="header__top__right__auth">
                                                    <span style={{margin:"5px"}}><i class="fa fa-user"></i></span>
                                                    <span style={{ cursor: "pointer"}}
                                                        onClick={() => signout(() => { history.push("/"); }) }>
                                                        Logout
                                                    </span>
                                                </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="header__logo">
                                    <Link to="/">
                                        <img src="img/logo.jpg" alt="" style={{height:"50px", width:"119px"}} />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <nav class="header__menu">
                                    <ul>
                                        <li class="active">
                                            <Link to="/"  style={isActive(history, "/")}>HOME</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" style={isActive(history, "/shop")}>Shop</Link>
                                        </li>
                                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                            <li className="nav-item">
                                                <Link to="/user/dashboard" className="nav-link" style={isActive(history, "/user/dashboard")}>
                                                    Dashboard
                                                </Link>
                                            </li>)}

                                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                            <li className="nav-item">
                                                <Link to="/admin/dashboard" className="nav-link" style={isActive(history, "/admin/dashboard")}>
                                                    Dashboard
                                                </Link>
                                            </li>)}
                                            {/* <li>
                                            <Link to="#">Blog</Link>
                                        </li> */}
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-3">
                                <div class="header__cart">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i class="fa fa-heart"></i>
                                                <span>0</span>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="/cart" className="nav-link" style={isActive(history, "/cart")}>
                                            <i class="fa fa-shopping-bag"></i>{" "}
                                            <sup>
                                                <small className="cart-badge">{itemTotal()}</small>
                                            </sup>
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="humberger__open">
                            <i class="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
            </div>
            {/* ----------------------------------------------------------------- */}
            {/* <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={isActive(history, "/")}>HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link" style={isActive(history, "/shop")}>Shop</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link" style={isActive(history, "/cart")}>
                        Cart{" "}
                        <sup>
                            <small className="cart-badge">{itemTotal()}</small>
                        </sup>
                    </Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link to="/user/dashboard" className="nav-link" style={isActive(history, "/user/dashboard")}>
                        Dashboard
                    </Link>
                </li>)}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link" style={isActive(history, "/admin/dashboard")}>
                        Dashboard
                    </Link>
                </li>)}
                
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link" style={isActive(history, "/signin")}>SIGNIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link" style={isActive(history, "/signup")}>SIGNUP</Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link" style={{ cursor: "pointer", color: "#ffffff" }}
                            onClick={() => signout(() => { history.push("/"); }) }>
                            SIGNOUT
                        </span>
                    </li>
                )}
            </ul>  */}
        </div>
    )
}

export default withRouter(Menu)
