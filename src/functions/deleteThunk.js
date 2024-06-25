import { delay } from "./delay";

const deleteThunk = async id => {
    try {
        const response = await delay(id)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
}

export { deleteThunk }