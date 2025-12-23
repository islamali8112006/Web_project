import hero from "../../assets/hero.jpg";
import plant from "../../assets/n.png";

const RescueHero = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <img
        src={hero}
        alt="Hero"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <img
        src={plant}
        alt="Plant"
        style={{ width: "70px", marginTop: "10px" }}
      />

      <h1 style={{ color: "black", marginTop: "5px" }}>
        Rescue Stories
      </h1>
    </div>
  );
};

export default RescueHero;