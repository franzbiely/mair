import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";
import { ProductContext } from "./ProductContext";

function App() {
  const [products, setProducts] = useState([]);
  

  // console.log("==== Playground in App =====")

  // const [fruits, setFruits] = useState([
  //   {
  //     name : "Manga",
  //     quantity: 5
  //   }, 
  //   {
  //     name : "grapes",
  //     quantity : 10
  //   }
  // ]);

  // const newFruit = {
  //   name : "Bayabas",
  //   quantity: 3
  // }

   

  // +

  // {
  //   name : "Bayabas",
  //   quantity : 3
  // }

  // /*
  // [   {name: "Manga", quanitty: 5}, 
  // {name: "Grapes", quanitty: 10}, 
  //     {
  //       name : "Bayabas",
  //       quantity: 3
  //     } 
  //   ]
  // */
  // <button onClick={() => {
  //   setFruits( [ ...fruits, {
  //     name : "Bayabas",
  //     quantity: 3
  //   } ] )
  // }}></button>

  



  // console.log("==== /Playground in App =====")


  const providerValue = {
    products,
    setProducts: (name, quantity,image) => {
      setProducts([...products, { name, quantity,image }]);
    },
    deleteProduct(i) { console.log({i,products})
      setProducts(products.slice(i+1))
    }
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
