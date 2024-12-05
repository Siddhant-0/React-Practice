const Cars = (props) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow:
          props.name == "Nissan Skyline R-34"
            ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"
            : "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",

        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: 300,
          height: "auto",
          borderRadius: 15,
          objectFit: "cover",
        }}
      />
      <h4>{props.name}</h4>
      <h4>{props.price}</h4>
      <h4>{props.countryOrigin}</h4>
    </div>
  );
};

export default Cars;
