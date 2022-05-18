import "./css/Ordercontainer.scss";
import Order from "../components/order.jsx";
import Ordersummary from "../components/orderSummary";
import Navbar from "../components/navBar.jsx";
import { useState } from "react";

const  Ordercontainer = () =>{
  const [summaryProducts, setSummaryProducts] = useState([]); //array de objetos

  const addProduct = (product) => { // add product to summary
    const newSummaryProducts = [...summaryProducts]; //copia el array
if(newSummaryProducts.find(p => p.id === product.id)){ // si el producto ya está en el array
  newSummaryProducts.find(p => p.id === product.id).quantity += 1; // aumenta la cantidad
}else{
  newSummaryProducts.push({...product, quantity: 1}); // si no está en el array, lo agrega
}
    setSummaryProducts(newSummaryProducts); // actualiza el estado
    console.log(newSummaryProducts)
  }

    // newSummaryProducts.push(product); //agrega el producto al array

    // setSummaryProducts(newSummaryProducts) //actualiza el estado


 
  
      
  return (
    <div className="order-container">
      <Navbar item1="ÓRDENES" item2="PEDIDOS LISTOS" />
      <div className="order-summary">
        <Order handleAddProduct={addProduct}/>
        <Ordersummary  productList={summaryProducts}/>
      </div>
    </div>
  );
}

export default Ordercontainer;