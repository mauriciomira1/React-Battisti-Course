// eslint-disable-next-line react/prop-types
const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && (
        <p>
          Este carro é <strong>novo</strong>!
        </p>
      )}
      {!newCar && (
        <p>
          Este carro é <strong>usado</strong>!
        </p>
      )}
    </div>
  );
};

export default CarDetails;
