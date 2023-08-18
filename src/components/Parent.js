import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

        
                {
                    isLoggedIn 
                    
                    ?
                    <p>You are logged in!</p>
                    
                    :

                    <Child  isLoggedIn = {isLoggedIn}
                      setIsLoggedIn = {setIsLoggedIn}/>
                }
    </div>
  )
}

export default Parent