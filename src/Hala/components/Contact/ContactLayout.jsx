import FirstBranchSection from "./FirstBranchSection";
import SecondBranchSection from "./SecondBranchSection";
import ContactInfoBox from "./ContactInfoBox";

function ContactLayout() {
  return (
    <div
      className="contact-layout"
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
            alignItems: "stretch"
      }}
    >
      <div
        className="contact-branches"
        style={{ display: "flex", gap: "20px", flex: 2 ,  alignItems: "stretch"}}
      >
        <FirstBranchSection />
        <SecondBranchSection />
      </div>

      <div style={{ flex: 1,display: "flex" }}>
        <ContactInfoBox />
      </div>
    </div>
  );
}

export default ContactLayout;