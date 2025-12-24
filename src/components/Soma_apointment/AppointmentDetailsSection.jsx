import React from "react";

export default function AppointmentDetailsSection({
  appointmentDate,
  timePreference,
  minDate,
  onChange,
}) {
  return (
    <div className="appointment-section">
      <h4 className="appointment-title">Appointment Details</h4>

      <div className="appointment-fields">
        <div className="day-box">
          <div className="date-field">
            <label className="appointment-label required">Preferred Day for Appointment *</label>
            <div className="date-input-wrapper">
              <input
                type="date"
                className="date-input"
                min={minDate}
                value={appointmentDate}
                onChange={(e) => onChange("appointmentDate", e.target.value)}
              />
            </div>
            <p className="date-example">Example: 12/26/2025</p>
          </div>
        </div>

        <div className="time-box">
          <div className="time-field">
            <label className="appointment-label required">Preferred Time for Appointment *</label>

            <div className="time-buttons">
              <label className={`time-btn ${timePreference === "am" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="time-preference"
                  value="am"
                  checked={timePreference === "am"}
                  onChange={(e) => onChange("timePreference", e.target.value)}
                />
                AM
              </label>

              <label className={`time-btn ${timePreference === "pm" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="time-preference"
                  value="pm"
                  checked={timePreference === "pm"}
                  onChange={(e) => onChange("timePreference", e.target.value)}
                />
                PM
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}