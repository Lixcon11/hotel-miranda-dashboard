import { createContext } from "react";
import { AuthAction, AuthState } from "./AuthProvider";

type AuthContextType  = { 
    authState: AuthState;
    authDispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export {AuthContext, AuthContextType }