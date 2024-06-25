import { createAsyncThunk } from "@reduxjs/toolkit";
import userData from "../data/usersData.json"
import { delay } from "../../../functions/delay";

const fetchUsers = createAsyncThunk("users/fetchUser", async () => {
    try {
        const rooms = await delay(userData)
        return rooms;
    }
    catch(e) {
        console.log(e)
        return null;
    }
})

export { fetchUsers }