import { useGetProducts } from "../hooks/useProducts"
import ItemsBreakfast from "./itemsBreakfast";


export const Waiter = ()=>{
const[desayuno, comida] = useGetProducts();

return(
    <article>
          { 
          desayuno.map((product) => (
          <ItemsBreakfast key={product._id} data={product} />
        ))
        }
    </article>
)
}