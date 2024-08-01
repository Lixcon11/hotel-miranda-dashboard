import { AuthState } from "../../types";

const getThunk = async (path: string, id: string) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}/${path}/${id}`;
    const authState: AuthState = JSON.parse(localStorage.getItem("auth") as string)

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
            const jsonData = [json[path.slice(0, -1)]]
            return jsonData;
        }
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
        
    } catch (e: any) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { getThunk };