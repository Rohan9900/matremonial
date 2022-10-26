import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Navbar() {


    const navigate = useNavigate();

    return (
        <div className="common_topNavWrap__j1YqX" data-testid="navbar" style={{ position: "sticky", top: "0", backgroundColor: "rgba(255, 255, 255, 0.2);", backdropFilter: " blur(8px)", padding: "10px 20px", zIndex: 100000000 }}>
            <div className="css-unc1yq">
                <img
                    className="logo_img"
                    alt="Matrimony Service by Shaadi.com"
                    title="Matrimony Service by Shaadi.com"
                    src={logo}
                    width="55px"
                    height="50px"
                    onClick={() => {
                        navigate('/')

                    }}

                />
            </div>
            {JSON.parse(localStorage.getItem("userId")) ?
                <div className="common_topRightNav__njFGj" onClick={() => {
                    localStorage.clear();
                    navigate('/login')
                }}>
                    <a className="common_login__Cxwgs css-ny049c"
                        style={{ color: "black", fontWeight: 1000, cursor: "pointer" }}>
                        Logout  <span style={{ color: "black", fontWeight: 1000 }} className="css-jdisn5"></span>
                    </a>
                </div> : <div className="common_topRightNav__njFGj">
                    <Link
                        to="/login"
                        data-testid="login_link"
                        href=""
                        className="common_login__Cxwgs css-ny049c"
                        style={{ color: "black", fontWeight: 1000 }}
                    >
                        Login<span style={{ color: "black", fontWeight: 1000 }} className="css-jdisn5"></span>
                    </Link>
                </div>}
        </div>
    );
}
