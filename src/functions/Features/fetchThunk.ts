import { AuthState } from "../../types";

const fetchThunk = async (path: string) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}/${path}`;
    const authState: AuthState = JSON.parse(localStorage.getItem("auth") as string)
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
            const jsonData = json[path]
            return jsonData;
        }
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
    }
    catch(e: any) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { fetchThunk }