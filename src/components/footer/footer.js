import React, {useState} from 'react';
import "./footer.scss"

function Footer(props) {
    const [toTop,setToTop] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 120) {
          setToTop(true)
        }
        else setToTop(false)
    });
    return (
        <div className="footer">
            {toTop? <div className="top">
                <a href="#">
                <i className="fas fa-arrow-alt-circle-up"/>
                </a>
            </div>:""}
            <hr/>
            <div className="footer-footer">
                <h5><span >&copy;</span> Honeymoon 2021</h5>
                <ul className="nav">
                <li className="nav-item">
                    <a href="tel:+998555000205" className="nav-link"><i className="fas fa-phone-alt"/>+998555000205</a>
                </li>
                <li className="nav-item">
                    <a href="https://telegram.me/Manager_saisolo" className="nav-link" target="_blank"><i className="fab fa-telegram-plane"/>honeymoon_uz</a>
                </li>
                <li className="nav-item">
                    <a href="https://instagram.com/alsafia_uz" className="nav-link" target="_blank"><i className="fab fa-instagram"/>honeymoon.uz</a>
                </li>
            </ul>
            </div>

        </div>
    );
}

export default Footer;