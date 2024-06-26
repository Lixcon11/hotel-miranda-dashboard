import { createSlice } from "@reduxjs/toolkit";
import { pendingCase } from "./pendingCase";
import { rejectedCase } from "./rejectedCase";

const initialState = {
    status: "idle",
    data: [],
    error: null
}

const slice = (name, fetchThunk, createThunk, updateThunk, deleteThunk, ) =>(

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

        .addCase(createThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data.push(action.pyload)
        })
        .addCase(createThunk.pending, pendingCase())
        .addCase(createThunk.rejected, rejectedCase())

        .addCase(updateThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data = state.data.map(r => r.id === action.payload.id ? action.payload : r)
        })
        .addCase(updateThunk.pending, pendingCase())
        .addCase(updateThunk.rejected, rejectedCase())

        .addCase(deleteThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.error = null;
            state.data = state.data.filter(r => r.id !== action.payload)
        })
        .addCase(deleteThunk.pending, pendingCase())
        .addCase(deleteThunk.rejected, rejectedCase())
    }
    })
)

export { slice }
