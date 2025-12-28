import { clinicImages } from "../data/clinicData";

export default function Clinic() {
  return (
    <section className="clinic " id="clinic">
      <h2>Welcome to the Heart of Our Clinic</h2>

      <p className="clinic-intro">
       Step inside Royal Care Vet Hospital, where every corner has been carefully designed to provide a warm and comfortable environment.
        Here, your beloved pets receive not only the highest standard of medical care but also love, attention, and a sense of safety.
         From examination rooms to our cozy waiting areas, each space reflects our commitment to their health and happiness, 
       while ensuring peace of mind for you, their devoted owners.
      </p>

      <div className="clinic-images">
        {clinicImages.map((img, index) => (
          <div className="clinic-card" key={index}>
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
