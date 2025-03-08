function FooterLinksColumn({ title, links }) {
    return (
        <ul class="footer-link-box-lists">
            <li>{title}</li>
            {links.map((link, index) => (
                <li key={index}>{link}</li>
            ))}
        </ul>
    );
}

export default FooterLinksColumn;
