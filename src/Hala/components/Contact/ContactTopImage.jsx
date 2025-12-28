import cat4 from "../../assets/cat4.jpg";
import plant from "../../assets/n.png"; 

function ContactTopImage() {
  return (
    <div>
      
      <img
        src={cat4}
        alt="contact header"
        style={{  display: "block" ,
           width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        height: "500px",
          backgroundSize: "cover",
        backgroundPosition: "center"
        }}
      />

      
      <div
        style={{
          textAlign: "center",
          marginTop: "30px" 
        }}
      >
        <img
          src={plant}
          alt="plant"
          style={{
            width: "90px",
            marginBottom: "-10px"
          }}
        />

        <h1
          style={{
            color: "#000000ff",
            fontFamily: '"Segoe UI", Arial, sans-serif',
            fontWeight: "bold",
            margin: 0
          }}
        >
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default ContactTopImage;
