import Basura from "../../img/botedebasura.png"

const CartItem = ({ data, deleteFromCart }) => {
  let { _id, name, price, quantity } = data;


  return (
    <div className="cart-item">
    <p id="name-item"> {name}  </p>    
    <p id="name-price"> x{quantity} = ${price * quantity}.00</p>    
    <input type="image" alt="button of clear product" id="bote-basura"  src={Basura} onClick={() => deleteFromCart(_id, true)}/>    
    </div>


  );
};
export default CartItem;

/*

*/
