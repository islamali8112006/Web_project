import hero from "../../assets/hero.jpg";
import plant from "../../assets/n.png";

const RescueHero = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <img
        src={hero}
        alt="Hero"
        style={{ 
          width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        height: "500px",
          backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />

      <img
        src={plant}
        alt="Plant"
        style={{ width: "90px", marginTop: "19px" }}
      />

      <h1 style={{ color: "black", marginTop: "5px" ,fontFamily: "Glyphicons Halflings", }}>
        Rescue Stories
      </h1>
    </div>
  );
};

export default RescueHero;