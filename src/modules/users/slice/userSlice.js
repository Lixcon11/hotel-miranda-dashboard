import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./fetchUsers";

const initialState = {
    status: "idle",
    data: [],
    error: null
}

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})

export { userSlice }