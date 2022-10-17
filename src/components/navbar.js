import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <div className="common_topNavWrap__j1YqX" data-testid="navbar" style={{ position: "sticky", top: "0", backgroundColor: "rgba(255, 255, 255, 0.2);", backdropFilter: " blur(8px)", padding: "10px 20px",zIndex:100000000 }}>
            <div className="css-unc1yq">
                <img
                    className="logo_img"
                    alt="Matrimony Service by Shaadi.com"
                    title="Matrimony Service by Shaadi.com"
                    src={logo}
                    width="55px"
                    height="50px"
                />
            </div>
            <div className="common_topRightNav__njFGj">
                <Link
                    to="/login"
                    data-testid="login_link"
                    href=""
                    className="common_login__Cxwgs css-ny049c"
                    style={{ color: "black", fontWeight: 1000 }}
                >
                    Login<span style={{ color: "black", fontWeight: 1000 }} className="css-jdisn5"></span>
                </Link>
            </div>
        </div>
    );
}
