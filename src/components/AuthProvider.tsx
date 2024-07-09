import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import React from "react";

const AUTH_KEY = "auth"

type AuthState  = {
  name?: string;
  email?: string;
  isLoggedIn?: boolean;
  photo?: string;
  id?: number;
}

type AuthAction = 
  | { type: "logIn"; payload: AuthState }
  | { type: "logOut" }
  | { type: "updateUser"; payload: Partial<AuthState> };

const AuthProvider = ({children}) => {
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

export { AuthProvider, AuthState, AuthAction}