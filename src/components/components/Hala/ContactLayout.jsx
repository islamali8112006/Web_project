import FirstBranchSection from "./FirstBranchSection";
import SecondBranchSection from "./SecondBranchSection";
import ContactInfoBox from "./ContactInfoBox";

function ContactLayout() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        alignItems: "flex-start"
      }}
    >
      <div style={{ display: "flex", gap: "20px", flex: 2 }}>
        <FirstBranchSection />
        <SecondBranchSection />
      </div>

      <div style={{ flex: 1 }}>
        <ContactInfoBox />
      </div>
    </div>
  );
}

export default ContactLayout;