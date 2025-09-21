import { Link, useSearchParams } from "react-router-dom";

export default function CarContainer({ carsList }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedBrand = searchParams.get("brand") || "";

  const currentBrand = carsList.find((car) => car.brand === selectedBrand);

  function handleBrandChange(event) {
    const value = event.target.value;
    setSearchParams(value ? { brand: value } : {}); // store brand in URL
  }

  return (
    <div>
      <select id="dropDown" value={selectedBrand} onChange={handleBrandChange}>
        <option value="">Select</option>
        {carsList.map((car) => (
          <option key={car.brand} value={car.brand}>
            {car.brand}
          </option>
        ))}
      </select>

      {currentBrand ? <h1 id="brandName">{currentBrand.brand}</h1> : <h2>Please Select a Brand</h2>}

      <div id="cardContainer">
        {currentBrand?.models.map((car) => (
          <Link id="vehicleCard" key={car.model} to={`model/${car.model}?brand=${selectedBrand}`}>
            <h2>
              {car.year} {car.model}
            </h2>
            <img style={{ width: 300 }} src={car.photo} alt={car.model} />
            <p>Top Speed: {car.topSpeed}</p>
            <p>Horsepower: {car.horsepower}</p>
            <p>Price: {car.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}