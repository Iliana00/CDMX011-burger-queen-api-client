import { auth } from "../../firebase/firebase.Config";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import "../../../src/Menu.scss"

export default function BttnLogout() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    
    const handlesignOut = async () => {
        try {
          await signOut(auth);
          console.log("saliendo de Burger Queen");
          navigate("/");
        } catch (error) {
          setError("Error");
        }
      };     
      return(
        <div>        
        <button className="bttn-logout" onClick={handlesignOut}>Cerrar sesión</button>
        <div className="error">{error}</div>
        </div>
      )
     
}