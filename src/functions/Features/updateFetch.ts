/*
import { DataState } from "../../types";
import { delay } from "./delay";

const updateThunk = async (data: DataState) => {
    try {
        const response = await delay(data)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { updateThunk }*/

import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { DataState } from "../../types";
import "dotenv/config";

const updateThunk = async (path: string, data: DataState) => {
    const { _id } = data;
    const url = `${process.env.REACT_APP_API_URL}/${path}/${_id}`;
    const { authState } = useContext(AuthContext);

    try {
        const response = await fetch(url, {
            method: "PATCH",
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

export { updateThunk };