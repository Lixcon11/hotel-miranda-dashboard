/*
import { DataState } from "../../types";
import { delay } from "./delay";

const createThunk = async (data: Partial<DataState>) => {
    try {
        const response = await delay(data)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { createThunk }

*/

import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { DataState } from "../../types";
import "dotenv/config";

const createThunk = async (path: string, data: Partial<DataState>) => {
    const url = `${process.env.REACT_APP_API_URL}/${path}`;
    const { authState } = useContext(AuthContext);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Token ${authState.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

export { createThunk };