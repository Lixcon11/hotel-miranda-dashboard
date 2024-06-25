import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext(null);
const AUTH_KEY = "auth"

const AuthProvider = ({children}) => {
  const authReducer = (state, action) => {
    switch(action.type) {
      case "logIn": 
        return {...action.payload, isLoggedIn: true};
      case "logOut":
        return {...state, isLoggedIn: false};
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, localStorage.getItem(AUTH_KEY) ? JSON.parse(localStorage.getItem(AUTH_KEY)) : {})
  
  
  useEffect(() => {
    if(authState.isLoggedIn === false) {
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

export { AuthProvider, AuthContext }