import React from "react";
import Logo from "/Logo.svg";
import Button from "./Button";

const Header = () => {
    return (
        <nav className="max-w-screen-xl py-8 px-4">
            <div className="flex items-center justify-around py-2 px-4 rounded-3xl bg-[#0B081C80] h-16 backdrop-blur">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex items-center gap-8 text-[#ECECEC]">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <Button bg="white" variant="solid">
                        Download the app
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
