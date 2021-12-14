

/*
import React, {Component} from 'react';

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
                <div className="img-product">
                <img className="pdtimg" src={product.image} alt="logos food"/>
                </div>                     
                
                <div className="productname">
                <h3>{product.name}</h3>
                </div>                
                <div className="bttns">
                <p> {product.price}</p>   
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
        <div className="precio">
        <p>Precio</p>
        </div>
        
        {this.state.posts}        
      </div>
      );
    }
  }
  
*/