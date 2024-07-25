import { delay } from "./delay";

const deleteThunk = async (data: number | string) => {
    try {
        const response = await delay(data)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { deleteThunk }