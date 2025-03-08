import FooterDescription from "./FooterDescription";
import FooterLogo from "./FooterLogo";
import FooterSocialMedia from "./FooterSocialMedia";

function FooterIconBox() {
    return (
        <div class="footer-icon-box">
            <FooterLogo />
            <FooterDescription />
            <FooterSocialMedia />
        </div>
    );
}

export default FooterIconBox;
