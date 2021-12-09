import "./kitchen.scss"
export default function Order() {

    return(
      <>      
        <table className="table-order">
        <thead>
        <tr className="client-order">
          <td><strong>Cliente:</strong></td>
          <td><strong>Girasol</strong></td>          
        </tr>
        
        <tr className="order-req">
          <td ><strong>Alimento</strong></td>
          <td><strong>Total</strong></td>          
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Producto 1</td>
          <td>43</td>          
        </tr>
        
        <tr>
          <td>Producto 1</td>
          <td>43</td>          
        </tr>
       </tbody>  
        </table>
        
        
        </>
    )
}