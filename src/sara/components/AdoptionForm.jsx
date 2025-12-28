export default function AdoptionForm({
  animals,
  formData,
  onInputChange,
  onSubmit
}) {
  return (
    <div className="adoption-form-container">
      <form id="adoptionForm" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              id="fullName"
              value={formData.fullName}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={onInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input
              id="phone"
              value={formData.phone}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Pet *</label>
            <select
              id="animalSelect"
              value={formData.animalSelect}
              onChange={onInputChange}
              required
            >
              <option value="">Select a pet</option>
              {animals.map((animal) => (
                <option key={animal.id} value={animal.id}>
                  {animal.name} - {animal.type} ({animal.breed})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Why do you want to adopt this pet? *</label>
          <textarea
            id="adoptionReason"
            value={formData.adoptionReason}
            onChange={onInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group full-width">
          <label>Previous Pet Experience :</label>
          <textarea
            id="previousExperience"
            value={formData.previousExperience}
            onChange={onInputChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Submit Adoption Application
        </button>
      </form>
    </div>
  );
}