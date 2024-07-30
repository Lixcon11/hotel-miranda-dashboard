//import { DataState } from "../../types";
//import { delay } from "./delay";
import "dotenv/config";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";

const fetchThunk = async ( path: string) => {
    const url = `${process.env.REACT_APP_API_URL}/${path}`;
    const { authState } = useContext(AuthContext);
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Token ${authState.token}`
            }
    })

        if(response.ok) {
            const json = await response.json();
            return json;
        }

        console.log("Error")
        return null;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { fetchThunk }