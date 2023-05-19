import { useState } from "react";

const ManageData = () => {
  const [number, setNumber] = useState(15);

  return (
    <div>
      <p>Valor: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Mudar valor
      </button>
    </div>
  );
};

export default ManageData;
