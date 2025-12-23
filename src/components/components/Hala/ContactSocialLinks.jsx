import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

function ContactSocialLinks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        margin: "20px 0"
      }}
    >
      <a
        href="https://www.facebook.com/share/1GRCtciXVh/?mibextid=wwXIfr"
        target="_blank"
      >
        <img
          src={facebook}
          alt="facebook"
          style={{ width: "40px", cursor: "pointer" }}
        />
      </a>

      <a
        href="https://www.instagram.com/royalcarevet?igsh=Zm1ieGluanhtdG9h"
        target="_blank"
      >
        <img
          src={instagram}
          alt="instagram"
          style={{ width: "40px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export default ContactSocialLinks;