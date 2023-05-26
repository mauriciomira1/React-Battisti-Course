import { useState } from "react";
import "./App.css";

// 4 - Custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  /*   const [products, setProducts] = useState([]); */
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //4 - Custom hook
  const { data: items, httpConfig } = useFetch(url);

  // 1 - Resgatando dados

  /*   useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
    return fetchData;
  }, []); */

  // Add novos produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await response.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando POST
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name}: R$ {product.price}
            </li>
          ))}
      </ul>
      <div className="add-product">
        <h2>Adicionar novo produto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:{" "}
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
