import { useEffect, useState } from "react";

import Header from "../components/saraADp/Header.jsx";
import PetCard from "../components/saraADp/PetCard.jsx";
import AdoptionForm from "../components/saraADp/AdoptionForm.jsx";
import "../components/saraADp/style.css";
const API_URL = "https://mocki.io/v1/f3ac2da9-3c46-4448-846b-7e5adaad124a";

export default function AdoptionPage() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    animalSelect: "",
    adoptionReason: "",
    previousExperience: ""
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
      
        setAnimals(data);
        setLoading(false);

      
        const saved = JSON.parse(localStorage.getItem("adoptionForm")) || {};
        setFormData((prev) => ({ ...prev, ...saved }));
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    const updated = { ...formData, [id]: value };
    setFormData(updated);
    localStorage.setItem("adoptionForm", JSON.stringify(updated));
  };

  const handleAdoptClick = (animalId) => {
    setFormData((prev) => ({ ...prev, animalSelect: animalId.toString() }));

    setTimeout(() => {
      const el = document.getElementById("adoptionReason");
      if (el) el.focus();
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Adoption Request",
        body: "Adoption form submitted",
        userId: 1
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(() => {
        alert(`Thank you ${formData.fullName}! We will contact you at ${formData.email}`);
      })
      .catch(() => {
        alert(`Thank you ${formData.fullName}! We will contact you at ${formData.email}`);
      });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      animalSelect: "",
      adoptionReason: "",
      previousExperience: ""
    });

    localStorage.removeItem("adoptionForm");
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="page-title">Royal Care Vet Hospital Adoption</h1>

        <div className="intro-text">
          <h2>Welcome to Royal Care Vet Hospital</h2>
          <p>
            All cats and dogs available for adoption are in excellent health and have received all
            required vaccinations at our hospital. Necessary medical examinations will be completed
            prior to adoption to ensure the safety of your pet and any other animals in your care.
            If you find a pet you would like to adopt, please complete the adoption form.
          </p>
        </div>

        <h2 className="section-title">Available Pets for Adoption</h2>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <div className="animals-container">
            {animals.map((animal) => (
              <PetCard key={animal.id} animal={animal} onAdopt={handleAdoptClick} />
            ))}
          </div>
        )}

        <h2 className="section-title">Adoption Application Form</h2>

        <AdoptionForm
          animals={animals}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}