import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Maurício",
          email: "mauricio@gmail.com",
          bio: "Sou um engenheiro",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
