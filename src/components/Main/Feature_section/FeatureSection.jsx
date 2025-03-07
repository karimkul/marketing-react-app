import FeatureImage from "./FeatureImage";
import MainFeature from "./MainFeature";
import "/styles/feature-section.css";

function FeatureSection() {
    return (
        <section class="feature-section">
            <MainFeature />
            <FeatureImage />
        </section>
    );
}

export default FeatureSection;
