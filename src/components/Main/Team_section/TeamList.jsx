import TeamMember from "./TeamMember";

const teamMembers = [
    {
        name: "Bogdan Krivenchenko",
        position: "Co-Founder & CEO",
        image: "/assets/images/Image-1.png"
    },
    {
        name: "Maxim Kamolin",
        position: "Co-Founder",
        image: "/assets/images/Image-2.png"
    },
    {
        name: "Artem Kyznetsov",
        position: "Design Lead",
        image: "/assets/images/Image-3.png"
    },
    {
        name: "Ilya Zinchenko",
        position: "HR Manager",
        image: "/assets/images/Image-4.png"
    },
    {
        name: "Sergey Filatov",
        position: "Social Engineering",
        image: "/assets/images/Image-5.png"
    },
    {
        name: "Alpamys Moldashev",
        position: "Brand Designer",
        image: "/assets/images/Image-6.png"
    }
];

function TeamList() {
    return (
        <div className="main-team-cardBox">
            {teamMembers.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                />
            ))}
        </div>
    );
}

export default TeamList;
