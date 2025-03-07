import "../../../styles/hero-section.css";

function HeroSection() {
    return (
        <section class="hero-section">
            <div class="main-hero">
                <div class="hero-left-box">
                    <img
                        src="/assets/images/Hero-section-img.png"
                        alt="Team picture"
                    />
                </div>
                <div class="hero-right-box">
                    <h1 class="hero-right-in">
                        A team that <br />
                        creates amazing <br />
                        products
                    </h1>
                    <p class="hero-right-text">
                        Get to know our team members better. Find out what we do
                        and how we want to make the world a better place.
                    </p>
                    <a href="#" class="hero-right-link">
                        Meet the crew &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
