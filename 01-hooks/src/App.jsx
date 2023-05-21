import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Maurício";

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true },
    { id: 2, brand: "VW", km: 120000, color: "Branco", newCar: false },
    { id: 3, brand: "Renault", km: 132000, color: "Azul", newCar: false },
  ];

  const persons = [
    { id: 1, name: "Maurício", age: 32, job: "Front End Developer" },
    { id: 2, name: "Cissy", age: 28, job: "Terapeuta Ocupacional" },
    { id: 3, name: "Ana Liz", age: 6, job: "Estudante" },
    { id: 4, name: "João", age: 17, job: "Universitário" },
  ];

  function showMessage() {
    console.log("Evento do componente pai.");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Aula de React</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      <CarDetails brand="Ford" km={15200} color="Bege" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Children */}
      <Container>
        <p>Este é o conteúdo usando children</p>
      </Container>
      <Container>
        <p>Agora o children tem outro texto</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Exercício - Desafio 4 */}
      {persons.map((person) => (
        <UserDetails
          key={person.id}
          name={person.name}
          age={person.age}
          job={person.job}
        />
      ))}
    </>
  );
}

export default App;
