import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductContext } from './ProductContext';



const setProduct = (name, quantity) => {
  const todos = JSON.parse(localStorage.getItem("Products"))
  todos.push({name, quantity});
  localStorage.setItem("Products", JSON.stringify(todos));
}

const providerValue = {
  products : JSON.parse(localStorage.getItem("Products")),
  setProducts : (name, quantity) => setProduct(name, quantity)
}
ReactDOM.render(
  <React.StrictMode>
    <ProductContext.Provider value={providerValue} >
      <App /> 
    </ProductContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
