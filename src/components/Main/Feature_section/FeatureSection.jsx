import FeatureImage from "./FeatureImage";
import MainFeature from "./MainFeature";
import "/styles/feature-section.css";

function FeatureSection() {
    return (
        <section className="feature-section">
            <MainFeature />
            <FeatureImage />
        </section>
    );
}

export default FeatureSection;
