export default function PetCard({ animal, onAdopt }) {
  return (
    <div className="animal-card">
      <img src={animal.image} className="animal-image" alt={animal.name} />

      <div className="animal-info">
        <h3 className="animal-name">
          <i className={animal.icon}></i> {animal.name} - {animal.breed}
        </h3>

        <span className="animal-type">{animal.type}</span>

        <div className="animal-details">
          <div className="detail">
            <div className="detail-label">Age</div>
            <div className="detail-value">{animal.age}</div>
          </div>

          <div className="detail">
            <div className="detail-label">Gender</div>
            <div className="detail-value">{animal.gender}</div>
          </div>

          <div className="detail">
            <div className="detail-label">Vaccinated</div>
            <div className="detail-value">{animal.vaccinated}</div>
          </div>
        </div>

        <button className="adopt-btn" onClick={() => onAdopt(animal.id)}>
          Adopt {animal.name}
        </button>
      </div>
    </div>
  );
}