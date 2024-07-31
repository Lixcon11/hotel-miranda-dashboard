//import { DataState } from "../../types";
//import { delay } from "./delay";
import "dotenv/config";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";

const fetchThunk = async (path: string) => {
    const url = `${process.env.REACT_APP_API_URL}/${path}`;
    const { authState } = useContext(AuthContext);
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Token ${authState.token}`,
                'Content-Type': 'application/json'
            }
    })

        if(response.ok) {
            const json = await response.json();
            return json;
        }
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
    }
    catch(e) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { fetchThunk }