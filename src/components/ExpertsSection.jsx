import React from "react";

const experts = [
  {
    id: 1,
    name: "Parisa A. Ariya",
    role: "Indoor Plant Specialist",
    photo: "https://network.expertisefinder.com/expert-profile-photo/parisa-ariya",
  },
  {
    id: 2,
    name: "Andrew Nelson",
    role: "Succulent Expert",
    photo: "https://network.expertisefinder.com/expert-profile-photo/andrew-nelson-1",
  },
  {
    id: 3,
    name: "Heather M. Hall",
    role: "Eco Decor Consultant",
    photo: " https://network.expertisefinder.com/expert-profile-photo/heather-m-hall",
  },
];

const ExpertsSection = () => {
  const sectionStyle = {
    padding: "3rem 0",
    backgroundColor: "#ffffff",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#000",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px , 1fr))",
    gap: "1.5rem",
    width: "1100px" ,
    margin: "0 auto",
    padding: "0 1rem",
  };

  const cardStyle = {
    backgroundColor: "#f1f8e9",
    padding: "1.5rem",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    boxShadow: "0 10px 15px rgba(0,0,0,0.15)",
  };

  const photoStyle = {
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  };

  const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#000",
    marginBottom: "0.5rem",
  };

  const roleStyle = {
    color: "#757d88ff",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}> Meet Our Green Experts</h2>
      <div style={gridStyle}>
        {experts.map((expert) => (
          <div
            key={expert.id}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            <img src={expert.photo} alt={expert.name} style={photoStyle} />
            <h2 style={nameStyle}>{expert.name}</h2>
            <p style={roleStyle}>{expert.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsSection;
