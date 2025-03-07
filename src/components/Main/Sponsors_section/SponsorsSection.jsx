import SponsorsHeader from "./SponsorsHeader";
import SponsorsList from "./SponsorsList";
import "/styles/sponsors-section.css";

function SponsorsSection() {
    return (
        <section class="sponsors-section">
            <div class="main-sponsors">
                <SponsorsHeader />
                <SponsorsList />
            </div>
        </section>
    );
}

export default SponsorsSection;
