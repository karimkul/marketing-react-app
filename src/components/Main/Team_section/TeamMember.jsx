function TeamMember({ name, position, image }) {
    return (
        <div className="main-team-card">
            <img className="team-card-img" src={image} alt={name} />
            <h4 className="team-card-name">{name}</h4>
            <h4 className="team-card-position">{position}</h4>
            <div className="team-card-mediaBox">
                <img
                    className="card-media-instagram"
                    src="/assets/social-media-icons/Instagram-4.png"
                    alt="Instagram"
                />
                <img
                    className="card-media-dribbble"
                    src="/assets/social-media-icons/dribbble-8.png"
                    alt="Dribbble"
                />
                <img
                    className="card-media-linkedin"
                    src="/assets/social-media-icons/linkedin-5.png"
                    alt="LinkedIn"
                />
            </div>
        </div>
    );
}

export default TeamMember;
