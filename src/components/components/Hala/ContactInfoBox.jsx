function ContactInfoBox() {
  return (
    <div
      style={{
        background: "#fbd4a6ff",
        padding: "20px",
        fontFamily: '"Helvetica Neue", Arial, sans-serif'
      }}
    >
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        092319669
      </p>


      <p><strong>Location 1:</strong></p>
      <p>Nablus - Eastern Industrial Zone Next to the cardboard factory</p>

      <p><strong>Location 2:</strong></p>
      <p>
        Nablus - Zawata Roundabout - Western Fire Station Behind Al Qasas Mosque
      </p>


      <p><strong>Working Hours In The Medical Clinic:</strong></p>
      <p>Saturday to Thursday: 9 AM - 11 PM</p>
      <p>Friday: 5 PM - 9 PM (Emergencies only)</p>

      <p><strong>Working Hours In The Hospital:</strong></p>
      <p>Saturday to Wednesday: 9 AM - 9 PM</p>
      <p>Thursday: 9 AM - 6 PM</p>
      <p>Friday: Closed</p>
    </div>
  );
}

export default ContactInfoBox;