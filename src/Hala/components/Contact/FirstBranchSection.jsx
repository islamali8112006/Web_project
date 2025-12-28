import map1 from "../../assets/map1.jpg";
import video1 from "../../assets/video1.mp4";

function FirstBranchSection() {
  return (
    <div
      style={{
        background: "#fffaf0",
        padding: "15px",
        width: "100%",
        fontFamily: '"Helvetica Neue", Arial, sans-serif'
      }}
    >
      <h3 style={{ textAlign: "center" }}>First branch</h3>
      <img src={map1} alt="first branch map" style={{ width: "100%" }} />
      <video src={video1} controls style={{ width: "100%", marginTop: "10px" }} />
    </div>
  );
}

export default FirstBranchSection;