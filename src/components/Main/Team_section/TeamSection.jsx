import TeamList from "./TeamList";

import "/styles/team-section.css";

function TeamSection() {
    return (
        <section className="team-section">
            <div className="main-team">
                <h2 className="main-team-in">Our Team Members</h2>
                <p className="main-team-text">
                    These are the people who work every day to create great
                    products that will help
                </p>
                <p className="main-team-text">you in your work.</p>

                <TeamList />

                <div className="main-team-btnBox">
                    <button className="main-team-btn">
                        We think you'll fit in here. Submit your application!
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
