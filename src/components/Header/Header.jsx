import React, { memo } from "react";
import "./header.css";
import logo from './give-love.png';

export const Header = memo(() => {
    return (
        <header className="header_cont">
            <div className="header">
                <img className="header__logo" src={logo} alt="logo" />
                <nav>
                    <a href="#help" className="header__links">Help</a>
                    <a href="#together" className="header__links">Not Alone</a>
                    <a href="#about" className="header__links">About Us</a>
                </nav>
            </div>
        </header>
    )
})