const RescueItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "row-reverse",
          alignItems: "stretch",
        alignItems: "center",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <img
        src={`/${item.image}`}
        alt={item.title}
        style={{
          width: "200px",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          backgroundColor: "#fffaf0",
          padding: "20px",
          borderRadius: "12px",
          color: "black",
          flex: 1,
          minHeight: "200px",
            display: "flex",           
    flexDirection: "column",   
    justifyContent: "center",
        }}
      >
        <h3 style={{ marginBottom: "-10px" }}>
          {item.title}
        </h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default RescueItem;
