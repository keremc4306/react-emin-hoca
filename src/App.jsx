import { useState } from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import Products from "./components/Products/Products.jsx";

const App = () => {
  const [counter, setCounter] = useState(100);
  return (
    <div className="App">
      <Products/>
      <Counter counte={counter} setCounter={setCounter}
      productPrice = {counter}>
        {counter}
      </Counter>
    </div>
  );
}

export default App;
