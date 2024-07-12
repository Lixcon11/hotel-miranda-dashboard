type DataState = any; //TODO: change to 4 compositions of users, contacts, rooms and bookings


type SliceState = {
    status: "idle" | "pending" | "fullfiled" | "rejected";
    data: DataState[];
    single: DataState[];
    error: null | string;
}

type RootState = {
    users: SliceState;
}

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

type AuthContextType  = { 
    authState: AuthState;
    authDispatch: React.Dispatch<AuthAction>;
}

export {RootState, SliceState, AuthState, AuthAction, AuthContextType, DataState}