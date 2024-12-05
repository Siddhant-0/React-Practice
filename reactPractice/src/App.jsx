import Cars from "./Cars";
const carData = [
  {
    id: 1,
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F11%2F2016-mclaren-p1-gtr-lanzante-road-legal-conversion-collecting-cars-auction-for-sale-2.jpeg?q=75&w=800&cbr=1&fit=max",
    name: "Mclaren P1",
    price: "Price : $1,130,000",
    countryOrigin: "Country : United Kingdon",
  },
  {
    id: 2,
    image:
      "https://static.jdmexport.com/wp-content/uploads/sites/9/2022/12/01074926/how-fast-is-a-nissan-gtr.jpg",
    name: "Nissan Skyline R-34",
    price: "Price : $120,000",
    countryOrigin: "Country : Japan",
  },
  {
    id: 3,
    image:
      "https://i.etsystatic.com/41031696/r/il/9684ec/5671749343/il_fullxfull.5671749343_lfkd.jpg",
    name: "Porshe 911 GT3 RS",
    price: "Price : $230,000",
    countryOrigin: "Country : Germany",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/4a/83/6f/4a836f60ba3b6be23f381750cb48a920.jpg",
    name: "Toyota Supra",
    price: "Price : $220,000",
    countryOrigin: "Country : Japan",
  },
  {
    id: 5,
    image:
      "https://static.jdmexport.com/wp-content/uploads/sites/9/2022/12/01074926/how-fast-is-a-nissan-gtr.jpg",
    name: "Nissan Skyline R-34",
    price: "Price : $120,000",
    countryOrigin: "Country : Japan",
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {carData.map((item) => {
        return (
          <Cars
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            countryOrigin={item.countryOrigin}
          />
        );
      })}
    </div>
  );
};

export default App;
