import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

import logo from "../../images/new_icon.webp";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="__navbar">
            <div className="__navbar-links">
                <div className="__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="__navbar-links_container">
                    <p>
                        <a href="#Home" style={{ color: "#fff", textDecoration: "underline" }}>
                            Home
                        </a>
                    </p>
                    <p>
                        <a href="#About">About</a>
                    </p>
                    <p>
                        <a href="#Internship">Internships</a>
                    </p>
                    <p>
                        <a href="#Contact">Contact</a>
                    </p>
                </div>
            </div>
            {/* <div className="__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div> */}
            <div className="__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="__navbar-menu_container scale-up-center">
                        <div className="__navbar-menu_container-links">
                            <p>
                                <a href="#Home">Home</a>
                            </p>
                            <p>
                                <a href="#About">About</a>
                            </p>
                            <p>
                                <a href="#Internship">Internships</a>
                            </p>
                            <p>
                                <a href="#Contact">Contact</a>
                            </p>
                        </div>
                        {/* <div className="__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
