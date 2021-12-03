import BarraNav from "../nav/barranav";
import { Desayuno } from "../menu/desayuno.js"
import "./menu.scss"
import { Carrito } from "./carrito";

export default function Menu() {

    return(
       
        <div className="container1">
        <BarraNav/>
        <div className="container-menu">
        <Desayuno/>
        
        <Carrito></Carrito>
        </div>
        
        </div>
    )
}