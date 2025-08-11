import ProductItem from "./components/ProductItem";
import './App.css';
import Products from "./components/Products";

function App() {
  /*const pgh = document.createElement("p");
  pgh.textContent = "Hello World!";
  document.getElementById("root").append(pgh);*/
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
