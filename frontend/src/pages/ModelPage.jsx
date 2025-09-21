import { useParams, useNavigate } from "react-router-dom";

export default function ModelPage({ carsList }) {
  const { model } = useParams(); // get the model name from the URL

  const navigate = useNavigate();

  // Flatten all models across brands and find the one that matches the URL param
  const selectedCar = carsList
    .flatMap((brand) => brand.models)
    .find((car) => car.model === model);

  // Handle the case where no car matches the URL
  if (!selectedCar) return <h2>Car not found</h2>;

  return (
    <div>
      <button id="backButton" onClick={() => navigate(-1)}>Back</button>
      <h1>
        {selectedCar.year} {selectedCar.model}
      </h1>
      <img src={selectedCar.photo} alt={selectedCar.model} width="80%" />
      <p>Top Speed: {selectedCar.topSpeed}</p>
      <p>Horsepower: {selectedCar.horsepower}</p>
      <p>Price: {selectedCar.price}</p>
      <p style={{ margin: 40 }}>
        Description: <br /> {selectedCar.description}
      </p>
    </div>
  );
}
