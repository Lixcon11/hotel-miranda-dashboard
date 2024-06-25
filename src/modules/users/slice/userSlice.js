import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./fetchUsers";
import { extraReducers } from "../../../functions/extraReducers";

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
        extraReducers(builder, fetchUsers)
    }
})

export { userSlice }