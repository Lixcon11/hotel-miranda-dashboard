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

export { getThunk }