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
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem(AUTH_KEY)) : {isLoggedIn: false})
  
  useEffect(() => {
    if(authState.isLoggedIn === false && localStorage.getItem(AUTH_KEY)) {
      localStorage.removeItem(AUTH_KEY)
    }
  },[authState])

  if (authState.isLoggedIn === true && !localStorage.getItem(AUTH_KEY)) {
    localStorage.setItem(AUTH_KEY,  JSON.stringify(authState))
  }
  
  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }