import './App.css';
import Counter from './components/Counter.jsx';
import Products from "./components/Products/Products.jsx";

const App = () => {
  return (
    <div className="App">
      <Products/>
      <Counter/>
    </div>
  );
}

export default App;
