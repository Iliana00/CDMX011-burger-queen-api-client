import { useEffect, useState } from "react";
import Axios from "axios";

export const useGetProducts = () => {
    const [desayuno, setDesayuno] = useState([]);
    const [comida, setComida] = useState([]);
   
   

    const getMenu = async() => {
        
        const resp = await Axios({
            url: 'https://my-json-server.typicode.com/iliana00/CDMX011-burger-queen-api-client/products',
        });
      
        setDesayuno(resp.data.filter(objeto => objeto.type === 'Desayuno'))
        setComida(resp.data.filter(objeto => objeto.type === 'Comida'))
    }

    
  
    useEffect(() => {
        getMenu();
    }, [desayuno], [comida]);
    return { desayuno, comida };
};