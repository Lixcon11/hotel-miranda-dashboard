import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthAction, AuthState } from "../types";

const AUTH_KEY = "auth"

const AuthProvider = ({children}: any) => {
  const authReducer = (state: AuthState, action: AuthAction) => {
    switch(action.type) {
      case "logIn": 
        return {...action.payload};
      case "logOut":
        return {isLoggedIn: false};
      case "updateUser":
        return {...state, ...action.payload};
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem(AUTH_KEY) as string) : {isLoggedIn: false})
  
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

export { AuthProvider}