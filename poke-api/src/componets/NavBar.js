import React from "react";

const NavBar = () => {
    const logoImage = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img alt="pokeapiLogo" src={logoImage} className="NavBar-img" />
            </div>
        </nav>
    );
}

export default NavBar;
