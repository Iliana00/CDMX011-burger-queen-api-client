import BarraNav from "./barranav"
import Order from "./order"
import "./kitchen.scss"

export default function Kitchen() {    

    return(
       
        <div className="container1">
        <BarraNav/>
        <div className="container-order">
        <Order/>
        </div>
        
       
        </div>
    )
}