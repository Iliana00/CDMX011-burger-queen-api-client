import { TYPES } from "../actions/carritoActions.js"

export const cartInitialState =  {
  products: [
    {
    "_id": "5",
    "name": " Hamburguesa simple",
    "price": "10",
    "image": "https://user-images.githubusercontent.com/74528786/144191854-bc22978c-c62d-444d-9fd6-8aac84e526e3.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "6",
    "name": "Hamburguesa doble",
    "price": "15",
    "image": "https://user-images.githubusercontent.com/74528786/144191854-bc22978c-c62d-444d-9fd6-8aac84e526e3.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "7",
    "name": "Papas fritas",
    "price": "5",
    "image": "https://user-images.githubusercontent.com/74528786/144191761-89e27832-18d1-4b62-8adb-671bd3ddd297.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "8",
    "name": "Aros de cebolla",
    "price": "5",
    "image": "https://user-images.githubusercontent.com/74528786/144191639-766b56f4-c381-49cf-95db-17d9d29a5875.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "9",
    "name": "Agua 500ml",
    "price": "5$",
    "image": "https://user-images.githubusercontent.com/74528786/144191916-46cacc91-99f8-43d8-9b39-788ae73046da.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "10",
    "name": "Agua 750ml",
    "price": "7",
    "image": "https://user-images.githubusercontent.com/74528786/144191916-46cacc91-99f8-43d8-9b39-788ae73046da.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "11",
    "name": "Bebida/gaseosa 500ml",
    "price": "7",
    "image": "https://user-images.githubusercontent.com/74528786/144191711-6e21976e-506e-42c5-a59e-18eb7bb31fa7.png",
    "type": "almuerzo",
    "dateEntry": ""
  },
  {
    "_id": "12",
    "name": "Bebida/gaseosa 750ml",
    "price": "10",
    "image": "https://user-images.githubusercontent.com/74528786/144191711-6e21976e-506e-42c5-a59e-18eb7bb31fa7.png",
    "type": "almuerzo",
    "dateEntry": ""
  }],
  cart: []
};
  

export function cartReducer(state, action) {
    switch (action.type) {
      case TYPES.ADD_TO_CART: {
        let newItem = state.products.find(
          (product) => product._id === action.payload
        );
        //console.log(newItem);
  
        let itemInCart = state.cart.find((item) => item._id === newItem._id);
  
        return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item._id === newItem._id
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
        let itemToDelete = state.cart.find((item) => item._id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item._id !== action.payload),
          };
      }
      case TYPES.REMOVE_ALL_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload),
        };
      }
      case TYPES.CLEAR_CART:
        return cartInitialState;
      default:
        return state;
    }
  }
 













/*
 /* eslint-disable react-hooks/rules-of-hooks */
 /*
 import { useEffect } from "react";
 import { useState } from "react";
 import { TYPES } from "../actions/carritoActions.js"
 import Axios from 'axios'
 
 export const cartInitialState = () => {
   const [almuerzo, setAlmuerzo] = useState([]);
   const cart = []
  
 
   const products = async() => {
   const resp = await Axios({
     method: 'GET',
     url: "https://my-json-server.typicode.com/iliana00/CDMX011-burger-queen-api-client/products",
 });
 
 setAlmuerzo(resp.data.filter(objeto => objeto.type === 'desayuno'))
 
   }
   useEffect(() => {
     products();
 },  [almuerzo]);
 
 return {  almuerzo, cart};
 };
   
 
 
 export function cartReducer(state, action) {
     switch (action.type) {
       case TYPES.ADD_TO_CART: {        
         let newItem = state.products.find(
           (product) => product._id === action.payload
         );
         console.log(newItem);
   
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
  
  
  
  
*/