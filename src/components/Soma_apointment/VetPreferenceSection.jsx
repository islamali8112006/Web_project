import React from "react";

const vets = [
  { value: "ahmed", label: "Dr. Ahmed Al-Amad" },
  { value: "abdel", label: "Dr. Abdel Razzak Ismail" },
  { value: "asma", label: "Dr. Asma Abu Khalil" },
  { value: "ahed", label: "Dr. Ahed Rawajba" },
  { value: "no-preference", label: "No Doctor Preference" },
  { value: "grooming", label: "Grooming" },
];

export default function VetPreferenceSection({ value, onChange }) {
  return (
    <div className="form-column">
      <div className="question-group">
        <h4 className="question-title">
          Select Preferred Veterinarian <span className="required-star">*</span>
        </h4>

        <div className="radio-options">
          {vets.map((v) => (
            <label className="radio-label" key={v.value}>
              <input
                type="radio"
                name="vet-preference"
                value={v.value}
                checked={value === v.value}
                onChange={(e) => onChange("vetPreference", e.target.value)}
              />
              <span className="radio-custom"></span>
              <span className="radio-text">{v.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}