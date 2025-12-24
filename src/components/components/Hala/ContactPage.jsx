import ContactTopImage from "./ContactTopImage";
import ContactSocialLinks from "./ContactSocialLinks";
import ContactLayout from "./ContactLayout";

function ContactPage() {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        fontFamily: '"Helvetica Neue", Arial, sans-serif'
      }}
    >
      <ContactTopImage />
      <ContactSocialLinks />
      <ContactLayout />
    </div>
  );
}

export default ContactPage;