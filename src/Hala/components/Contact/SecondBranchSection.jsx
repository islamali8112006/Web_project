import map2 from "../../assets/map2.jpg";
import video2 from "../../assets/video2.mp4";

function SecondBranchSection() {
  return (
    <div
      style={{
        background: "#fffaf0",
        padding: "15px",
        width: "100%",
        fontFamily: '"Helvetica Neue", Arial, sans-serif'
      }}
    >
      <h3 style={{ textAlign: "center" }}>Second branch</h3>
      <img src={map2} alt="second branch map" style={{ width: "100%" }} />
      <video src={video2} controls style={{ width: "100%", marginTop: "10px" }} />
    </div>
  );
}

export default SecondBranchSection;