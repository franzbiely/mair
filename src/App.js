import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";
import { ProductContext } from "./ProductContext";

function App() {
  const [products, setProducts] = useState([]);

  const providerValue = {
    products,
    setProducts: (name, quantity) => {
      setProducts([...products, { name, quantity }]);
    },
  };
  return (
    <div className="App">
      <ProductContext.Provider value={providerValue}>
        <Header />
        <Products />
        <ProductList />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
