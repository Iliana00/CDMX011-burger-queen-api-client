import React, {Component} from 'react';
import Agua from "../../img/agua.png"
import "./desayuno.scss"
 

export  class Desayuno extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product:[]
      }
    };
  
    componentDidMount(){
      let url = "https://my-json-server.typicode.com/iliana00/CDMX011-burger-queen-api-client/products?type=almuerzo"
      fetch(url)
      .then(resp => resp.json())
      .then(data => {

        let posts = data.map((product, index) => {
            return ( 
              <div className="menu-desayuno" key={index}>
                <div className="hr-padre">
                <hr/> 
             </div> 
                <div className="hijo-desayuno">          
                <img className="img-product" src={Agua} alt="logos food"/>
                <h3>{product.name}</h3>
                <button className="menos">-</button>
                <p> {product.price}</p>   
                <button className="mas">+</button>  
                        
               </div>
                 
              </div>                                      
                                     
            )
                                                    
        })
        this.setState({posts:posts});
      })
    }
    render() {
      return (
      <div className="desayuno">
        <p>Precio</p>
        {this.state.posts}
      </div>
      );
    }
  }
  