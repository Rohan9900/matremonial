/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../../assets/logo.png';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>

            <div className="homeFirst">
                <div className='bac'>
                    <img src={logo} width="200" className='logo_img' />
                    <h1>
                        Love Finder
                    </h1>
                </div>
                <div className="proceed_bottom">
                    <h4>
                        Proceed To Search
                    </h4>

                    <a href="#searchAll">
                        <IconButton>
                            <KeyboardDoubleArrowDownIcon style={{ fontSize: "2em", color: "white" }} />
                        </IconButton>
                    </a>
                </div>
                <video className="home_vid" poster autoPlay loop muted style={{ filter: "blur(0px)" }}>
                    <source src="https://img2.shaadi.com/assests/2018/vip-shaadi/vip-new.mp4" type='video/mp4' />
                </video>
            </div>
            <div id="searchAll" style={{ position: "relative", background: "white", height: "100vh" }}>lcdlcldl cddmkk</div>

        </div>
    );
}
