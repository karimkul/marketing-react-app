import FeatureSection from "./Feature_section/FeatureSection";
import HeroSection from "./Hero_section/HeroSection";
import SponsorsSection from "./Sponsors_section/SponsorsSection";
import TeamSection from "./Team_section/TeamSection";

function Main() {
    return (
        <main>
            <HeroSection />
            <FeatureSection />
            <TeamSection />
            <SponsorsSection />
        </main>
    );
}

export default Main;
