import { useState } from "react";
import { createContext } from "react"

export const LoginContext = createContext(null);
const ContextProvider=(props)=>{
   const[uname,setUname]=useState('');
   return (
       <LoginContext.Provider
          value={{uname,setUname}}
          >
           {props.children}
       </LoginContext.Provider>
   );
}
export default ContextProvider;