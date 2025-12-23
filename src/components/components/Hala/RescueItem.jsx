const RescueItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse", 
        alignItems: "center",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      
      <img
        src={new URL(`../../assets/${item.image}`, import.meta.url).href}
        alt={item.title}
        style={{
          width: "200px",
          borderRadius: "10px",
        }}
      />

      
      <div
        style={{
          backgroundColor: "#fbd4a6ff",
          padding: "20px",
          borderRadius: "12px",
          color: "black",
          flex: 1,
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default RescueItem;
