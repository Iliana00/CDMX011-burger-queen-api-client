import "./desayuno.scss"
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducers.js";
import "./carrito.scss"
import ItemsBreakfast from "../menu/itemsBreakfast";
import { TYPES } from "../actions/carritoActions";


const ShoppingCart = () =>  {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products, cart } = state;
 /*  const { desayuno, almuerzo } = cartInitialState(); */

  const addToCart = (_id)=>{
    dispatch({type: TYPES.ADD_TO_CART, payload: _id})
    console.log(_id)
  }
  /* const delFromCart = ()=>{}
  const clearCart = ()=>{} */
    
  return (
        <div className="all-food">
          <div className="carrito-1">
  
          <article>
          {products.map((product) => (
          <ItemsBreakfast key={product.id} data={product} addToCart={addToCart} />
        ))}
          </article>
          </div>                                   
        </div>
        );      
}
export default ShoppingCart