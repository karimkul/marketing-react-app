function NavItem({ text }) {
    return (
        <li>
            <a className="header-nav-link" href="#">
                {text}
            </a>
            <img
                src="/assets/icons/icon-chevron-down-2.png"
                alt="Chevron Icon"
                className="chevron-icon"
            />
        </li>
    );
}

export default NavItem;
