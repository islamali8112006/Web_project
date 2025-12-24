import React from "react";
import useLocalStorageForm from "../../hooks/useLocalStorageForm";
import { submitAppointment } from "../../api/appointmentApi";

import RecordsSection from "./RecordsSection";

export default function AppointmentForm() {

  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    medicalRecords: "",
    previousRecords: ""
  };

  const [form, setForm, clearForm] =
    useLocalStorageForm("appointmentForm", initialForm);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitAppointment(form);
      alert("Appointment submitted successfully!");
      clearForm();
    } catch (error) {
      alert("Error submitting appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <RecordsSection
        form={form}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
