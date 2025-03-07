import SponsorsCart from "./SponsorsCart";

const sponsors = [
    {
        image: "./assets/sponsors-img/Group.png",
        text: "The latest project from the Unisense team exceeded all expectations and will help many people"
    },
    {
        image: "./assets/sponsors-img/aven 2.png",
        text: "The latest project from the Unisense team exceeded all expectations and will help many people"
    },
    {
        image: "./assets/sponsors-img/goldline 2.png",
        text: "The latest project from the Unisense team exceeded all expectations and will help many people"
    }
];
function SponsorsList() {
    return (
        <div class="main-sponsors-cards">
            {sponsors.map((sponsor) => (
                <SponsorsCart image={sponsor.image} text={sponsor.text} />
            ))}
        </div>
    );
}

export default SponsorsList;
