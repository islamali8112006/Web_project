import React from "react";

import HeaderSection from "./components/Soma_apointment/HeaderSection";
import NewClientSection from "./components/Soma_apointment/NewClientSection";
import VetPreferenceSection from "./components/Soma_apointment/VetPreferenceSection";
import ClientInfoSection from "./components/Soma_apointment/ClientInfoSection";
import PetInfoSection from "./components/Soma_apointment/PetInfoSection";
import AppointmentDetailsSection from "./components/Soma_apointment/AppointmentDetailsSection";
import RecordsSection from "./components/Soma_apointment/RecordsSection";
import SubmitBar from "./components/Soma_apointment/SubmitBar";

const STORAGE_KEY = "appointmentFormData";

const initialForm = {
  newClient: "",
  vetPreference: "",

  firstName: "",
  lastName: "",
  email: "",
  phone: "",

  petName: "",
  reason: "",

  appointmentDate: "",
  timePreference: "",

  medicalRecords: "",
  previousRecords: "",
  hearAbout: "",
};

function useLocalStorageForm(key, initialValue) {
  const [state, setState] = React.useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  const clear = () => {
    localStorage.removeItem(key);
    setState(initialValue);
  };

  return [state, setState, clear];
}

export default function AppointmentPage() {
  const [form, setForm, clearForm] = useLocalStorageForm(STORAGE_KEY, initialForm);
  const minDate = React.useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }, []);

  const update = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "petName",
      "reason",
      "appointmentDate",
    ];

    for (const field of required) {
      if (!String(form[field] ?? "").trim()) {
        alert("Please fill all required fields.");
        return false;
      }
    }

    if (!form.vetPreference) {
      alert("Please select a veterinarian.");
      return false;
    }

    if (!form.timePreference) {
      alert("Please select AM or PM.");
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Appointment request submitted successfully!");
    clearForm();
  };

  const onClear = () => {
    if (confirm("Are you sure you want to clear all saved form data?")) {
      clearForm();
      alert("All saved data has been cleared!");
    }
  };

  return (
    <div className="container">
      <div className="force-full">
        <img src="/banner.png" alt="banner" />
      </div>

      <HeaderSection />

      <div className="content">
        <form id="appointmentForm" onSubmit={onSubmit}>
          <div className="required-notice">
            <p>Fields marked with an * are required</p>
          </div>

          <div className="two-columns-section">
            <div className="columns-container">
              <NewClientSection value={form.newClient} onChange={update} />
              <VetPreferenceSection value={form.vetPreference} onChange={update} />
            </div>
          </div>

          <ClientInfoSection form={form} onChange={update} />
          <PetInfoSection form={form} onChange={update} />

          <AppointmentDetailsSection
            appointmentDate={form.appointmentDate}
            timePreference={form.timePreference}
            minDate={minDate}
            onChange={update}
          />

          <RecordsSection form={form} onChange={update} />

          <SubmitBar onClear={onClear} />
        </form>
      </div>
    </div>
  );
}