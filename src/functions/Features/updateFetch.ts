import { AuthState, DataState } from "../../types";

const updateThunk = async (path: string, data: DataState) => {
    const { _id } = data;
    const url = `${import.meta.env.VITE_API_DOMAIN}/${path}/${_id}`;
    const authState: AuthState = JSON.parse(localStorage.getItem("auth") as string)

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
            const jsonData = json[path.slice(0, -1)]
            return jsonData;
        } 
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
        
    } catch (e: any) {
        console.error(`Fetch error: ${e.message}`);
        return null;
    }
}

export { updateThunk };