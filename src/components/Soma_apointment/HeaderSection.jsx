import React from "react";

export default function HeaderSection() {
  return (
    <header className="appointment-header">
      <div className="force-full">

<img
  src="/images/Screenshot 2025-12-22 170619.png"
  alt="Header"
/>
      </div>

      <div className="logo">
        <img
          src="http://beaverbrookah.com/wp-content/uploads/2019/07/leaves-dark.png"
          alt="Pets"
        />
      </div>

      <h1>Appointment Request Online</h1>

      <p className="header-text">
        Looking to pay us a visit? Complete our appointment request form below and click
        'submit.' Please ensure that the date and time you choose is at least 24 hours in the
        future so our team has time to process your request and contact you to confirm your
        appointment.
      </p>

      <div className="emergency-notice">
        <span className="emergency-text">
          <i className="fas fa-exclamation-triangle"></i>
          If this is an emergency, please do not fill out this form. Call us at [+972 599 371
          185] or contact one of our emergency clinics.
        </span>
      </div>
    </header>
  );
}