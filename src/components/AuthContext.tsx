import { createContext } from "react";
import { AuthContextType } from "../types";

const empty = {
    name: "",
    email: "",
    isLoggedIn: false,
    photo: "",
    id: 0
}

const AuthContext = createContext<AuthContextType>({authState: empty, authDispatch: () => null});

export {AuthContext}