import BarraNav from "../nav/barranav";
import "./menu.scss";
import ShoppingCart from "./carrito"



export default function Menu() {

    return(
       
        <div className="container1">
        <BarraNav/>
        <div className="container-menu">
        <ShoppingCart/>
        </div>
        
       
        </div>
    )
}