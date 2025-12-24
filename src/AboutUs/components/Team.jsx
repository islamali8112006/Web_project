
import React, { useEffect, useState } from "react";
import "../RoyalCareVetHospital.css";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetch("https://mocki.io/v1/61c987b8-c946-455f-b411-9835983a521e")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="team">
      <h2>Veterinarians & Veterinary Staff</h2>

      {teamMembers.map((member) => (
        <div key={member.id} className="doctor">
          <img src={member.image} alt={member.name} />

          <div className="doctor-info">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>

            {showDetails[member.id] && (
              <div
                className="doctor-box"
                dangerouslySetInnerHTML={{ __html: member.description }}
              />
            )}

            <button
              className="doctor-btn"
              onClick={() => toggleDetails(member.id)}
            >
              {showDetails[member.id] ? "Hide Details" : "View Details"}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}