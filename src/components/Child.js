import React, { useState } from 'react'

const Child = ({isLoggedIn, setIsLoggedIn}) => {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    function implementLogin(e){
        e.preventDefault();
        if(name !== "" && password !== "")
            setIsLoggedIn(true);
    }
  return (
    <div>
        <form >
            <label>Username: </label>
            <input type="text"  onChange={(e)=> {setName(e.target.value)}} value={name}/>

            <label>Password: </label>
            <input type="password" onChange={(e)=> {setPassword(e.target.value)}} value={password}/>

            <button onClick={implementLogin}>Login</button>
        </form>
    </div>
  )
}

export default Child