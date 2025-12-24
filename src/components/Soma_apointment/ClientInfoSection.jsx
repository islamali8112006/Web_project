import React from "react";

export default function ClientInfoSection({ form, onChange }) {
  return (
    <>
      <h3 className="section-title">Client Information</h3>

      <div className="form-row">
        <div className="form-group">
          <label className="required">First Name *</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="required">Last Name *</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Email *</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="required">Phone *</label>
          <input
            type="tel"
            placeholder="(+970)"
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </div>
      </div>
    </>
  );
}