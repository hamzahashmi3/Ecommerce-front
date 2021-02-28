import React, {Fragment} from 'react';
import { Link, withRouter } from "react-router-dom";
import {signout, isAuthenticated} from '../Auth/Index';
import { itemTotal } from "./CartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};


function Menu({history}) {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={isActive(history, "/")}>HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link" style={isActive(history, "/shop")}>
                        Shop
                    </Link>
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
            </ul> 
        </div>
    )
}

export default withRouter(Menu)
