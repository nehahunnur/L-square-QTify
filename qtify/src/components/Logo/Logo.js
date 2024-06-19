import React from "react";
import BrandLogo from "../../assets/logo.png";

const LogoComponent = () => {
    return (
        <div>
            <img src={BrandLogo} alt='logo' width={67} />
        </div>
    );
};

export default LogoComponent;
