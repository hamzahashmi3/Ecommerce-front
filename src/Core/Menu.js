import React, {Fragment,useState} from 'react';
import { Link, withRouter } from "react-router-dom";
import {signout, isAuthenticated} from '../Auth/Index';
import { itemTotal } from "./CartHelpers";
import './menu.css';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#f18b04" };
    } else {
        return { color: "#252525" };
    }
};


function Menu({history}) {
    const [click, setClick] = useState(false);

    const handleClick = () =>{
        setClick(!click);

    }
    return (
        <div>
            
            <div className="Home">
                <div className="humberger__menu__overlay"></div>
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__left">
                                        <ul>
                                            <li>
                                                <i className="fa fa-envelope"></i>
                                                <a href="https://mail.google.com/mail/u/0/#inbox" className="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">salmanlobby3@gmail.com </a>
                                            </li>
                                            <li>providing quility is our one and only approach</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__right">
                                        <div className="header__top__right__social">
                                            <Link to="#">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-pinterest-p"></i>
                                            </Link>
                                        </div>
                                        <div className="header__top__right__language">
                                            <img src="img/language.png" alt="" />
                                            <div>English</div>
                                        </div>
                                        {!isAuthenticated() && (
                                            <Fragment>
                                                <div className="header__top__right__auth">
                                                    <Link to="/signin" style={isActive(history, "/signin")}>
                                                        Login 
                                                    </Link>
                                                </div>
                                                <span style={{margin:"5px"}}><i className="fa fa-user"></i></span>
                                                <div className="header__top__right__auth">
                                                    <Link to="/signup" style={isActive(history, "/signup")}>
                                                         SignUp
                                                    </Link>
                                                </div>
                                            </Fragment>
                                        )}
                                        {isAuthenticated() && (
                                                <div className="header__top__right__auth">
                                                    <span style={{margin:"5px"}}><i className="fa fa-user"></i></span>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="header__logo">
                                    <Link to="/">
                                        <img src="img/logo3.svg" alt="" style={{height:"60px", width:"200px"}}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <nav className="navbar">
                                <div className="nav-container">
                                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                                        <li className="nav-item">
                                            <Link exact to="/"    className="nav-links" style={isActive(history, "/")}> Home </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link exact to="/shop"  activeClassName="active"  className="nav-links" style={isActive(history, "/shop")}>Shop</Link>
                                        </li>
                                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                            
                                            <li className="nav-item">
                                                <Link exact to="/user/dashboard"  activeClassName="active"  className="nav-links" style={isActive(history, "/user/dashboard")}>Dashboard</Link>
                                            </li>
                                            )}
                                            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                            <li className="nav-item">
                                                <Link exact to="/admin/dashboard"  activeClassName="active"  className="nav-links" style={isActive(history, "/admin/dashboard")}>Dashboard</Link>
                                            </li>
                                            )}
                                            {/* <li>
                                                <Link to="#">Blog</Link>
                                            </li> */}
                                        <li className="nav-item">
                                            <Link exact to="/contact"  activeClassName="active"  className="nav-links" style={isActive(history, "/contact")}> Contact </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-heart"></i>
                                                <span>0</span>
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="/cart" className="nav-link" style={isActive(history, "/cart")}>
                                            <i className="fa fa-shopping-bag"></i>{" "}
                                            <sup>
                                                <small className="cart-badge">{itemTotal()}</small>
                                            </sup>
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="humberger__open" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
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
