import { useContext } from "react";
import { AuthContext, AuthContextType  } from "./AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute =({children}) => {
    const context = useContext(AuthContext);
    if(context !== null) {
      const { authState } = context;

      const auth = authState.isLoggedIn;
    
      if(!auth) {
        return <Navigate to="/login"/>
      }
    }
  
    return children;
  }

  export { PrivateRoute }