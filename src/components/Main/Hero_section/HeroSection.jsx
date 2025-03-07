import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import "/styles/hero-section.css";

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="main-hero">
                <HeroImage />
                <HeroContent />
            </div>
        </section>
    );
}

export default HeroSection;
