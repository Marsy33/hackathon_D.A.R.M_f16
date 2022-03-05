import React, { memo } from "react";
import "./footer.css";
import email from './images/email.png';
import phone from './images/phone-call.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';

const Header = memo(() => {
    return (
        <footer className="footer_cont">
            <div className="footer">
                <div className="footer__about" id="about">
                    <h4>About us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident suscipit natus a cupiditate ab minus illum quaerat maxime inventore Ea consequatur consectetur hic provident dolor ab aliquam eveniet alias</p>
                </div>
                <div className="footer__contacts">
                    <h4>Contact Info</h4>
                    <menu>
                        <li><img src={email} alt="email" className="footer__contacts__images" /><span>info@notalone.com</span></li>
                        <li><img src={phone} alt="phone" className="footer__contacts__images" /><span>+9545866567</span></li>
                    </menu>
                    <div className="footer__contacts__networks">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={instagram} alt="inctagram" />
                    </div>
                </div>
                <p className="rights">© 2022 All Rights Reserved</p>
            </div>
        </footer>
    )
})
export default Header;