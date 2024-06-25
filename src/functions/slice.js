import { createSlice } from "@reduxjs/toolkit";
import { pendingCase } from "./pendingCase";
import { rejectedCase } from "./rejectedCase";

const initialState = {
    status: "idle",
    data: [],
    error: null
}

const slice = (name, fetchThunk, deleteThunk) =>(

    createSlice({
    name: name,
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data = action.payload;
        })
        .addCase(fetchThunk.pending, pendingCase())
        .addCase(fetchThunk.rejected, rejectedCase())
        .addCase(deleteThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data = state.data.filter(user => user.id !== action.payload)
        })
        .addCase(deleteThunk.pending, pendingCase())
        .addCase(deleteThunk.rejected, rejectedCase())
    }
    })
)

export { slice }
