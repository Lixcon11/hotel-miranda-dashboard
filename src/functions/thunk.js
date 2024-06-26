import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "./delay";

const thunk = (text, data) => createAsyncThunk(text, async (passingData) => {
    try {
        const response = await delay(data ? data: passingData)
        return response;
    }
    catch(e) {
        console.log(e)
        return null;
    }
})

export { thunk }