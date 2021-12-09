

export const cartInitialState =  {
  products: [
    {
      "_id": "1",
      "name": "Cafe Americano",
      "price": "5",
      "image": "",
      "type": "desayuno",
      "dateEntry": ""
    },
    {
      "_id": "2",
      "name": "Cafe con Leche",
      "price": "5",
      "image": "",
      "type": "desayuno",
      "dateEntry": ""
    },
    {
      "_id": "3",
      "name": "Sándwich de jamón y queso",
      "price": "10",
      "image": "",
      "type": "desayuno",
      "dateEntry": ""
    },
    {
      "_id": "4",
      "name": "Jugo de frutas natural",
      "price": "7",
      "image": "",
      "type": "desayuno",
      "dateEntry": ""
    },
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
    }
  ],
  cart: []
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


/*
  const [desayuno, setDesayuno] = useState([]);
  const [almuerzo, setAlmuerzo] = useState([]);
  

  const products = async() => {
  const resp = await Axios({
    method: 'GET',
    url: "https://my-json-server.typicode.com/iliana00/CDMX011-burger-queen-api-client/products",
});

setDesayuno(resp.data.filter(objeto => objeto.type === 'desayuno'))
setAlmuerzo(resp.data.filter(objeto => objeto.type === 'almuerzo'))
  }
  useEffect(() => {
    products();
}, [desayuno], [almuerzo]);
return { desayuno, almuerzo};
*/






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