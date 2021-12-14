//import { Products } from "../fetch/getData";
import BarraNav from "../nav/barranav";
//import { Desayuno } from "../menu/desayuno.js"
import "./menu.scss"
//import ItemsBreakfast from "./itemsBreakfast";
import { Waiter } from "./waiter";
//import { Carrito } from "./carrito";


export default function Menu() {

    return(
       
        <div className="container1">
        <BarraNav/>
        <div className="container-menu">
        
        <Waiter/>
        
        </div>
        
        </div>
    )
}