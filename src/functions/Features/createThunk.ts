import { delay } from "./delay";

const createThunk = async (data: object) => {
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