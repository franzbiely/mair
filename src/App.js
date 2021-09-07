import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";
import { ProductContext } from "./ProductContext";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(" ");
  const [image, setImage] = useState(" ");
  const [i, setI] = useState(" ");
  const clearFields = () => {
    setName("");
    setQuantity("");
    setImage("");
    setI("");
  };
    // CategoryForm
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  
  const clearText = () => {
    setCategory("");
    console.log(category);
  };

  const providerValue = {
    // CATEGORY
    categories,
    addCategory: (category) => {
      setCategories([...categories, {category}]);
    },
    deleteCategory(i) {
      const tempCategory = [...categories];
      tempCategory.splice(i, 1);
      setCategories(tempCategory);
    },
    category,
    setCategory,
    clearText,
    editCategory(i){
      const editableCategory = categories.find((category, w)=>{
        console.log({i, w}); 
        return i ===w
      });
      console.log({ editableCategory});
      setCategory(editableCategory.category);
      setI(i);
    },
    saveEditCategory(i) {
      const updateCategory = [...categories]
      updateCategory[i] = {category};
      setCategories(updateCategory)
    },
    i,



      //  Products
    products,
    setProducts: (name, quantity, image) => {
      setProducts([...products, { name, quantity, image }]);
    },
    deleteProduct(i) {
      const tempProduct = [...products];
      tempProduct.splice(i, 1);
      setProducts(tempProduct);
    },
   
    // edit
    name,
    setName,
    quantity,
    setQuantity,
    image,
    setImage,
    clearFields,

    editProduct(i) {
      const editableItems = products.find((product, j) => {
        console.log({ i, j });
        return i === j;
      });
      console.log({ editableItems });
      setName(editableItems.name);
      setQuantity(editableItems.quantity);
      setImage(editableItems.image);
      setI(i);
    },
    // saveEdit
    saveEditProducts(i) {
      const update = [...products];
      update[i] = { name, quantity, image };
      setProducts(update);
    },
    i,
  };
  return (
    <div className="App">
      <ProductContext.Provider value={providerValue}>
        <Header />
        <Products />
        <ProductList />
        
        {/* <CategoryForm />
        <CategoryList /> */}
      </ProductContext.Provider>
    </div>
  );
}

export default App;
