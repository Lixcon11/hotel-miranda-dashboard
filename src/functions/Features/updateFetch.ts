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

export { updateThunk }