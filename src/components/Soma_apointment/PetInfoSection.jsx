import React from "react";

export default function PetInfoSection({ form, onChange }) {
  return (
    <>
      <h3 className="section-title">Pet Information</h3>

      <div className="form-group">
        <label className="required">Pet's Name *</label>
        <input
          type="text"
          placeholder="Enter your pet's name"
          value={form.petName}
          onChange={(e) => onChange("petName", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="required">Reason for Visit *</label>
        <textarea
          rows="4"
          placeholder="Please describe the reason for your visit"
          value={form.reason}
          onChange={(e) => onChange("reason", e.target.value)}
        />
      </div>
    </>
  );
}