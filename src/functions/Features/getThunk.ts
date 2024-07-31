/*
import { delay } from "./delay";

const getThunk = async (id: string) => {
    try {
        const response = await delay(id)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { getThunk }*/

import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import "dotenv/config";

const getThunk = async (path: string, id: string) => {
    const url = `${process.env.REACT_APP_API_URL}/${path}/${id}`;
    const { authState } = useContext(AuthContext);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Token ${authState.token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        }
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
        
    } catch (e) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { getThunk };