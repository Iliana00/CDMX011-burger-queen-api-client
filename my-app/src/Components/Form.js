import React, {useState } from "react";

export default function Form(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert("Listo el pollo")
  }
  return (
  <>
    <h2>Form</h2>;
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}
      /> 
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}
      /> 
      <input type="submit" value="Ingresar"/>
    </form>
  </>
  );
}