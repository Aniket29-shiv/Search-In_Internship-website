import React from "react";

const Footer = () => {
    return (
        <div id="Contact" className="footer gradient__bg">
            <div>
                <h1>Connect With Us!</h1>
                <p>
                    <a href="https://www.linkedin.com/company/searchinapp/" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://twitter.com/SearchIn_tech" target="_blank">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/searchinlive/" target="_blank">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?next=/SearchIn_tech/" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.youtube.com/channel/UCAaEm1msRPe5XskcZXIkbhg" target="_blank">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                </p>
            </div>
            <p className="copywright">copywright @ SearchIn 2022</p>
        </div>
    );
};

export default Footer;
