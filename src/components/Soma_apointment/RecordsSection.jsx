import React from "react";

export default function RecordsSection({ form, onChange }) {
  return (
    <>
      <p className="info-text">
        For your upcoming appointment, we may need the previous records for your pet. Please list
        below any clinic(s) or hospital(s) your pet may have gone to. As the owner, you may also
        need to contact these locations to authorize the release of the records. You may also
        upload the records as well.
      </p>

      <div className="form-group">
        <label className="required">Does your pet have previous medical records? *</label>
        <div className="custom-select">
          <select
            value={form.medicalRecords}
            onChange={(e) => onChange("medicalRecords", e.target.value)}
          >
            <option value="">Please select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Previous Records / Vaccine History</label>
        <textarea
          rows="3"
          placeholder="Please list any previous clinics, hospitals, or vaccine history..."
          value={form.previousRecords}
          onChange={(e) => onChange("previousRecords", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="required">How did you hear about us? *</label>
        <input
          type="text"
          placeholder="e.g., Friend, Google, Social Media, etc."
          value={form.hearAbout}
          onChange={(e) => onChange("hearAbout", e.target.value)}
        />
      </div>
    </>
  );
}