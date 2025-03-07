function SponsorsCart({ image, text }) {
    return (
        <div class="main-sponsors-box">
            <div class="sponsors-card">
                <img class="sponsors-icon1" src={image} alt={image} />
            </div>
            <p class="sponsors-card-text">{text}</p>
        </div>
    );
}

export default SponsorsCart;
