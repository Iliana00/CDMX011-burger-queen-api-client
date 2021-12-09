import { TYPES } from ""

export const cartInitialState = {
  products: [
    {
      _id: 1,
      name: "Cafe Americano",
      price: 5,     
    },
    {
      _id: 2,
      name: "Cafe con Leche",
      price: 5,      
    },
    {
      _id: 3,
      name: "Sándwich de jamón y queso",
      price: 10,        
    },
    {
      _id: 4,
      name: "Jugo de frutas natural",
      price: 7,
      
    },
    {
      _id: 5,
      name: "Hamburguesa simple",
      price: 10,      
    },
    {
      _id: 6,
      name: "Hamburguesa doble",
      price: 15,
      
    },
    {
      _id: 7,
      name: "Papas fritas",
      price: 5,    
    },
    {
      _id: 8,
      name: "Aros de cebolla",
      price: 5,      
    },
    {
      _id: 9,
      name: "Agua 500ml",
      price: 5,      
    },
    {
      _id: 10,
      name: "Agua 750ml",
      price: 7,      
    },
    {
      _id: 11,
      name: "Bebida/gaseosa 500ml",
      price: 7,      
    },
    {
      _id: 12,
      name: "Bebida/gaseosa 750ml",
      price: 10,      
    }
  ],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return cartInitialState;
    default:
      return state;
  }
}
-------------------------------------------------
import { TYPES } from "../actions/carritoActions.js"

export const cartInitialState = {
  products: [
    {
      id: 1,
      name: "Cafe Americano",
      price: 5,     
    },
    {
      id: 2,
      name: "Cafe con Leche",
      price: 5,      
    },
    {
      id: 3,
      name: "Sándwich de jamón y queso",
      price: 10,        
    },
    {
      id: 4,
      name: "Jugo de frutas natural",
      price: 7,
      
    },
    {
      id: 5,
      name: "Hamburguesa simple",
      price: 10,      
    },
    {
      id: 6,
      name: "Hamburguesa doble",
      price: 15,
      
    },
    {
      id: 7,
      name: "Papas fritas",
      price: 5,    
    },
    {
      id: 8,
      name: "Aros de cebolla",
      price: 5,      
    },
    {
      id: 9,
      name: "Agua 500ml",
      price: 5,      
    },
    {
      id: 10,
      name: "Agua 750ml",
      price: 7,      
    },
    {
      id: 11,
      name: "Bebida/gaseosa 500ml",
      price: 7,      
    },
    {
      id: 12,
      name: "Bebida/gaseosa 750ml",
      price: 10,      
    }
  ],
  cart: [],
};

export function cartReducer(state, action) {
    switch (action.type) {
      case TYPES.ADD_TO_CART: {        
      }
      case TYPES.REMOVE_ONE_FROM_CART: {
      }
      case TYPES.REMOVE_ALL_FROM_CART: {
        
      }
      case TYPES.CLEAR_CART:
        return cartInitialState;
      default:
        return state;
    }
  }
  /*
  export class cartInitialState extends Component {
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
        this.setState({            
            product: data.product
            
        })
    })
  }
}
  */