// src/components/PlantCareTips.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWater, 
  faSun, 
  faLeaf, 
  faScissors, 
  faBug, 
  faSeedling 
} from "@fortawesome/free-solid-svg-icons";

const tips = [
  {
    id: 1,
    title: "Water Wisely",
    desc: "Overwatering is worse than underwatering. Check the soil before watering.",
    icon: faWater,
  },
  {
    id: 2,
    title: "Give Them Light",
    desc: "Most indoor plants love bright but indirect sunlight.",
    icon: faSun,
  },
  {
    id: 3,
    title: "Clean the Leaves",
    desc: "Dust can block sunlight. Wipe leaves once a week.",
    icon: faLeaf,
  },
  {
    id: 4,
    title: "Use Proper Soil",
    desc: "Choose soil suitable for your plant type to ensure healthy roots.",
    icon: faSeedling,
  },
  {
    id: 5,
    title: "Prune Regularly",
    desc: "Trim dead or yellow leaves to encourage new growth.",
    icon: faScissors,
  },
  {
    id: 6,
    title: "Check for Pests",
    desc: "Inspect plants for insects or fungus and treat early.",
    icon: faBug,
  },
];

const PlantCareTips = () => {
  const sectionStyle = {
    padding: "3rem 0",
    backgroundColor: "#f1f8e9",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#17781c",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
    borderRadius: "1rem",
    padding: "1.5rem",
    transition: "box-shadow 0.3s ease",
    marginBottom: "5rem" ,
  };

  const cardHoverStyle = {
    boxShadow: "0 10px 15px rgba(0,0,0,0.15)",
  };

  const iconStyle = {
    fontSize: "2.25rem",
    marginBottom: "1rem",
    color: "#17781c",
    
  };

  const titleStyle = {
    fontSize: "1.50rem",
    fontWeight: "600",
    color: "#000000",
    marginBottom: "0.5rem",
  };

  const descStyle = {
    color: "#757d88ff",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Plant Care Tips</h2>
      <div style={gridStyle}>
        {tips.map((tip) => (
          <div
            key={tip.id}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = cardStyle.boxShadow)
            }
          >
            <div style={iconStyle}>
              <FontAwesomeIcon icon={tip.icon} />
            </div>
            <h3 style={titleStyle}>{tip.title}</h3>
            <p style={descStyle}>{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;
