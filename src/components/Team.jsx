import { useState } from "react";
import { teamMembers } from "../data/teamData";

export default function Team() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="team" id="team">
      <h2>Veterinarians & Veterinary Staff</h2>

      {teamMembers.map((doc, index) => (
        <div className="doctor" key={index}>
          <img src={doc.image} alt={doc.name} />

          <div className="doctor-info">
            <h3>
              {doc.isDoctor && <span className="highlight">Dr. </span>}
              {doc.name}
            </h3>
            <h4>{doc.role}</h4>

            {/* الزر */}
            <button
              className="doctor-btn"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {openIndex === index ? "Hide details" : "View details"}
            </button>

            {/* البوكس */}
            {openIndex === index && (
              <div className="doctor-box">
                <p
                  dangerouslySetInnerHTML={{
                    __html: doc.description,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
