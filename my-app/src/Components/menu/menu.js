import BarraNav from "../nav/barranav";
import { Desayuno } from "../menu/desayuno.js"
import "./menu.scss"

export default function Menu() {

    return(
       
        <div className="container1">
<BarraNav/>
        
        <div className="des-alm">
        <Desayuno/>
        </div>
        <div className="comanda">
        </div>
        </div>
    )
}