import { thunk } from "./thunk"
import { createSlice } from "@reduxjs/toolkit";
import { pendingCase } from "./pendingCase";
import { rejectedCase } from "./rejectedCase";

const crudSlice = (data, name) => {

    const upperPlural = name.charAt(0).toUpperCase() + name.slice(1, name.lenght)
    const upperSingular = upperPlural.slice(0, -1)

    const fetchThunk = thunk(`${name}/fetch${upperPlural}`, "fetch", data)
    const createThunk = thunk(`${name}/create${upperSingular}`, "create")
    const updateThunk = thunk(`${name}/update${upperSingular}`, "update")
    const deleteThunk = thunk(`${name}/delete${upperSingular}`, "delete")

    const slice = createSlice({
        name: name,
        initialState: {
            status: "idle",
            data: [],
            error: null
        },
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
        
    return [slice, fetchThunk, createThunk, updateThunk, deleteThunk]
}

export { crudSlice };