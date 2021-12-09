import "./desayuno.scss";
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducers.js";
import "../../Menu.scss";
import ItemsBreakfast from "./itemsBreakfast";
import { TYPES } from "../actions/carritoActions";
import CartItem from "./cartItem";


const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products, cart } = state;

  const addToCart = (_id) => {
    //console.log(_id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: _id });
  };

  const deleteFromCart = (_id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: _id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: _id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <>
      <div className="second-container">
        <div className="bbtn-food">
        <button className="bttn-breakfast">DESAYUNOS</button>
        <button className="bttn-lunch">ALMUERZOS</button>
        </div>
        <div className="name-client">          
        <label >Cliente</label>
      <input placeholder="Nombre del cliente"></input>
        </div>
        
      </div>
      
      <div className="main-container">
        <div className="container-left">

          <article>
            {products.map((product) => (
              <ItemsBreakfast
                key={product._id}
                data={product}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
              />
            ))}
          </article>
        </div>
        <div className="container-right">
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
          <div className="bttns">
            <button className="bttn-cancel" onClick={clearCart}>
              Cancelar
            </button>
            <button className="send-kitchen" onClick={clearCart}>
              Enviar a cocina
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
