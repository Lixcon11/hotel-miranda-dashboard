import { delay } from "./delay";

const deleteThunk = async data => {
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