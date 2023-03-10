import React from "react";
import "./header.css"

const Header = () => {
    return (
       <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Smith</a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skill
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-briefcase-al nav__icon"></i> Service
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close"></i>
                </div>

                <div className="nav__toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
       </header>
    )
}

export default Header;