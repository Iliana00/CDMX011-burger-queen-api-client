import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
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

export function shoppingReducer(state, action) {
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
      return shoppingInitialState;
    default:
      return state;
  }
}