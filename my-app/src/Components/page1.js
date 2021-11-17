import React, { useState } from 'react'
import { auth, onAuthStateChanged } from "../firebase/firebase.Config.js"


export default function Page1() {
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    return (
        <div>
            <h1>Page 1</h1>
           <p> { user.email }</p> 
        </div>
    )
}