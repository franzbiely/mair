import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";
import { ProductContext } from "./ProductContext";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("NAME NI");
  const [quantity, setQuantity] = useState("100");
  const [image, setImage] = useState("goku.jpg");
  const clearFields = () => {
    setName("");
    setQuantity("");
    setImage("");
  };

  // const [editableProducts, setEditableProducts] = useState({});
  // const x = products
  // setProducts("hello")

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
    setProducts: (name, quantity, image) => {
      setProducts([...products, { name, quantity, image }]);
    },
    deleteProduct(i) { 
      const tempProduct = [...products]
      tempProduct.splice(i,1)
      setProducts(tempProduct)
    },
    name,
    setName,
    quantity,
    setQuantity,
    image,
    setImage,
    clearFields,
    
    editProduct(i){
      const editableItems = products.find((product, j) => {
       console.log({i,j})
        return i === j
      })
      console.log({editableItems})
      setName(editableItems.name)
      setQuantity(editableItems.quantity)
      setImage(editableItems.image)
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
