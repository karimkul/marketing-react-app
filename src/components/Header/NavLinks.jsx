import NavButton from "./NavButton";
import NavItem from "./NavItem";

function NavLinks({ isMenuOpen }) {
    return (
        <nav className={`header-links ${isMenuOpen ? "open" : ""}`}>
            <ul className={`header-nav-list ${isMenuOpen ? "open" : ""}`}>
                <NavItem text="Home" />
                <NavItem text="Pages" />
                <NavItem text="Blog" />
                <NavItem text="Portfolio" />
                <NavButton />
            </ul>
        </nav>
    );
}

export default NavLinks;
