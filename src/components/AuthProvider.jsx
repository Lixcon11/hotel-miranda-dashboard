import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";

const AUTH_KEY = "auth"

const AuthProvider = ({children}) => {
  const authReducer = (state, action) => {
    switch(action.type) {
      case "logIn": 
        return {...action.payload, isLoggedIn: true};
      case "logOut":
        return {isLoggedIn: false};
      case "updateUser":
        return {...state, ...action.payload};
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem(AUTH_KEY)) : {isLoggedIn: false})
  
  useEffect(() => {
    if(authState.isLoggedIn === false) {
      localStorage.removeItem(AUTH_KEY)
    }
    else {
      localStorage.setItem(AUTH_KEY,  JSON.stringify(authState))
    }
    
  },[authState])
  
  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }