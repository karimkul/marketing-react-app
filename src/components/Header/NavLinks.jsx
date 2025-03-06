import NavButton from "./NavButton";
import NavItem from "./NavItem";

function NavLinks() {
    return (
        <nav className="header-links">
            <ul className="header-nav-list">
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
