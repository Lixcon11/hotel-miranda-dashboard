import { thunk } from "./thunk"
import { createSlice, Slice } from "@reduxjs/toolkit";
import { pendingCase } from "./pendingCase";
import { rejectedCase } from "./rejectedCase";
import { fullfilledResponse } from "./fullfilledResponse";
import { DataState, SliceState } from "../../types";


type CrudSliceReturn = [
    Slice<any>,
    {
      toFetch: ReturnType<typeof thunk>,
      toGet: ReturnType<typeof thunk>,
      toCreate: ReturnType<typeof thunk>,
      toUpdate: ReturnType<typeof thunk>,
      toDelete: ReturnType<typeof thunk>
    }
  ];

const crudSlice = <T extends DataState>(data: T[], name: string): CrudSliceReturn => {

    const upperPlural = name.charAt(0).toUpperCase() + name.slice(1, name.length)
    const upperSingular = upperPlural.slice(0, -1)

    const fetchThunk = thunk(`${name}/fetch${upperPlural}`, "fetch", data)
    const getThunk = thunk(`${name}/get${upperSingular}`, "get")
    const createThunk = thunk(`${name}/create${upperSingular}`, "create")
    const updateThunk = thunk(`${name}/update${upperSingular}`, "update")
    const deleteThunk = thunk(`${name}/delete${upperSingular}`, "delete")

    const initialState: SliceState<T> = {
        status: "idle",
        data: [],
        single: [],
        error: null
    }

    const slice = createSlice({
        name: name,
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder
            .addCase(fetchThunk.fulfilled, (state, action) => {
                fullfilledResponse(state);
                state.data = action.payload;
            })
            .addCase(fetchThunk.pending, pendingCase())
            .addCase(fetchThunk.rejected, rejectedCase())

            .addCase(getThunk.fulfilled, (state, action) => {
                fullfilledResponse(state);
                state.single = state.data.filter(r => r.id == action.payload)
            })
            .addCase(getThunk.pending, pendingCase())
            .addCase(getThunk.rejected, rejectedCase())
    
            .addCase(createThunk.fulfilled, (state, action) => {
                fullfilledResponse(state);
                const idList = state.data.map(obj => obj.id).sort((a, b) => a - b);
                let newId = 1;
                for (let id of idList) {
                    if(id === newId) {
                        newId++;
                    } 
                    else {
                        break;
                    }
                }
                console.log(action.payload)
                state.data.push({id: newId, ...action.payload})
            })
            .addCase(createThunk.pending, pendingCase())
            .addCase(createThunk.rejected, rejectedCase())
    
            .addCase(updateThunk.fulfilled, (state, action) => {
                fullfilledResponse(state);
                state.data = state.data.map(r => r.id === action.payload.id ? {...r, ...action.payload} : r)
            })
            .addCase(updateThunk.pending, pendingCase())
            .addCase(updateThunk.rejected, rejectedCase())
    
            .addCase(deleteThunk.fulfilled, (state, action) => {
                fullfilledResponse(state);
                state.data = state.data.filter(r => r.id !== action.payload)
            })
            .addCase(deleteThunk.pending, pendingCase())
            .addCase(deleteThunk.rejected, rejectedCase())
        }
        })

    return [slice, {toFetch: fetchThunk, toGet: getThunk, toCreate: createThunk, toUpdate: updateThunk, toDelete: deleteThunk}]
}

export { crudSlice };