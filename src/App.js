import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";

const setProduct = (name, quantity) => {
  const todos = JSON.parse(localStorage.getItem("Products"))
  todos.push({name, quantity});
  localStorage.setItem("Products", JSON.stringify(todos));
}

const providerValue = {
  products : JSON.parse(localStorage.getItem("Products")),
  setProducts : (name, quantity) => setProduct(name, quantity)
}

function App() {
  const [product, setProduct] =  useState([]) 
  return (
    <div className="App">
       <ProductContext.Provider value={providerValue} >
      <Header />
      <Products />
      <ProductList />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
