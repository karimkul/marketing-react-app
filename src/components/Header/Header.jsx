import { useState } from "react";
import "../../../styles/header.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-nav">
                <Logo />
                <button
                    className="header-icon-menu"
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    Click to open the menu
                </button>
                <NavLinks isMenuOpen={isMenuOpen} />
            </div>
        </header>
    );
}

export default Header;
