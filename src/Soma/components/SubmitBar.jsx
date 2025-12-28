import React from "react";

export default function SubmitBar({ onClear }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button
        type="button"
        className="submit-btn"
        onClick={onClear}
        style={{ background: "#6c757d", marginRight: 10 }}
      >
        <i className="fas fa-trash"></i> Clear Saved Data
      </button>

      <button type="submit" className="submit-btn">
        <i className="fas fa-calendar-check"></i> Submit Appointment Request
      </button>
    </div>
  );
}