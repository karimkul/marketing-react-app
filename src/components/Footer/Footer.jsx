import FooterIconBox from "./FooterIconBox";
import FooterLinksBox from "./FooterLinksBox";
import FooterCopyRight from "./FooterCopyright";

import "/styles/footer.css";

function Footer() {
    return (
        <footer>
            <div class="footer-section">
                <FooterIconBox />
                <FooterLinksBox />
            </div>
            <FooterCopyRight />
        </footer>
    );
}

export default Footer;
