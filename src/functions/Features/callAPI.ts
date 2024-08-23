import { DataState, Method } from "../../types";

const callAPI = async (url: string, token: string, method: Method = "GET", data?: any) => {
    //console.log(data)
    //console.log(data ? JSON.stringify(data): undefined)
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data): undefined
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        } 
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
        
    } catch (e: any) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { callAPI }