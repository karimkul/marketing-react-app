import FooterLinksColumn from "./FooterLinksColumn";

function FooterLinksBox() {
    return (
        <div class="footer-links-box">
            <FooterLinksColumn
                title="Home"
                links={[
                    "Desktop App",
                    "Mobile App",
                    "SaaS",
                    "Event",
                    "Software"
                ]}
            />
            <FooterLinksColumn
                title="Pages"
                links={[
                    "About Us",
                    "Careers",
                    "Case Studies",
                    "Case Studies",
                    "Pricing"
                ]}
            />
            <FooterLinksColumn
                title="Blog"
                links={["Blog Listing", "Blog Article", "Newsroom"]}
            />
            <FooterLinksColumn
                title="Portfolio"
                links={["Portfolio", "Single Case"]}
            />
        </div>
    );
}

export default FooterLinksBox;
