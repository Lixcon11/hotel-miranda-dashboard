import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute =({children}) => {
    const { authState }  = useContext(AuthContext);

    const auth = authState.isLoggedIn;
  
    if(!auth) {
      return <Navigate to="/login"/>
    }
  
    return children;
  }

  export { PrivateRoute }