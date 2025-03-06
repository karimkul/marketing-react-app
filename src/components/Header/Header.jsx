import "../../../styles/header.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
    return (
        <header className="header">
            <div className="header-nav">
                <Logo />
                <NavLinks />
                {/* <img className="header-icon-menu" src="./assets/icon-menu 1.png" alt="img" /> */}
            </div>
        </header>
    );
}

export default Header;
