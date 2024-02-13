import React from "react";
import Logo from "/Logo.svg";
import Button from "./Button";

const CardFeature = ({ title, icon, btn, children }) => {
    return (
        <div className="max-w-screen-xl py-8 px-4">
            <div className="flex flex-col gap-4 items-start p-16 rounded-3xl bg-[#BB9BFF26] backdrop-blur">
                <div>{icon}</div>
                <div className="flex flex-col items-start gap-2">
                    <h3> {title} </h3>
                    <p> {children} </p>
                    <Button bg="white" variant="link">
                        {btn}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CardFeature;
