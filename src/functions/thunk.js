import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchThunk } from "./fetchThunk";
import { deleteThunk } from "./deleteThunk";

const thunks = {
    fetch: fetchThunk,
    delete: deleteThunk

}

const thunk = (text, data, type) => createAsyncThunk(text, async (passingData) => thunks[type](data ? data: passingData ))

export { thunk }