import React from "react";

import img from "../images/android_illu.jpg";
import "./component.css";

const Header = () => {
    return (
        <div className="header" id="Header">
            <div className="header-title">
                <h1 className="gradient__text">Search-In Internships</h1>
                <p>
                    Our goal is to help you to gain personal and professional skills in the area of Technological
                    development. The purpose is to provide a structure through which students may exercise their right
                    to freely associate in pursuit of a common purpose or goal that enhances the community.
                </p>
                <a href="#Internship">
                    <button type="button" class="btn btn-outline-dark .btn-lg ">
                        Appy for Internship
                    </button>
                </a>
            </div>
            <div className="header-img">
                <img src={img} style={{ width: "80%" }} />
            </div>
        </div>
    );
};

export default Header;
