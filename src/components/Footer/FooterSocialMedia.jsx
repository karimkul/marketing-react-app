const socialIcons = [
    { src: "/assets/social-media-icons/Dribbble.png", alt: "Dribbble" },
    { src: "/assets/social-media-icons/Facebook.png", alt: "Facebook" },
    { src: "/assets/social-media-icons/Twitter.png", alt: "Twitter" },
    { src: "/assets/social-media-icons/YouTube.png", alt: "YouTube" }
];

function FooterSocialMedia() {
    return (
        <div class="footer-icon-box-mediaBox">
            {socialIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} />
            ))}
        </div>
    );
}

export default FooterSocialMedia;
