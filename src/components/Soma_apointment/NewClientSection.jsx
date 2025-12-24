import React from "react";

export default function NewClientSection({ value, onChange }) {
  return (
    <div className="form-column">
      <div className="question-group">
        <h4 className="question-title">
          Are You A New Client <span className="required-star">*</span>
        </h4>

        <div className="radio-options">
          <label className="radio-label">
            <input
              type="radio"
              name="new-client"
              value="yes"
              checked={value === "yes"}
              onChange={(e) => onChange("newClient", e.target.value)}
            />
            <span className="radio-custom"></span>
            <span className="radio-text">Yes</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="new-client"
              value="no"
              checked={value === "no"}
              onChange={(e) => onChange("newClient", e.target.value)}
            />
            <span className="radio-custom"></span>
            <span className="radio-text">No</span>
          </label>
        </div>
      </div>
    </div>
  );
}