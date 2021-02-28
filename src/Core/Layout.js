import React from "react";
import Menu from "./Menu";
import "../Styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <div className="container-fluid">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
