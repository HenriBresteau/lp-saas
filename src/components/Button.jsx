import React from "react";

const Button = ({ bg, variant, children }) => {
    let buttonClasses = "py-2 px-8 rounded-3xl focus:outline-none";

    // Ajoutez les classes en fonction de la variante choisie
    if (variant === "solid") {
        buttonClasses += ` bg-${bg} text-black`;
    } else if (variant === "outline") {
        buttonClasses += ` border border-${bg}-500 text-${bg}-500`;
    } else if (variant === "ghost") {
        buttonClasses += ` text-${bg}-700 hover:bg-${bg}-100`;
    } else if (variant === "link") {
        buttonClasses += ` text-${bg}-500 underline hover:no-underline`;
    }
    return <button className={buttonClasses}>{children}</button>;
};

export default Button;
