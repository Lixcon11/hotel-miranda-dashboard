import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteThunk } from "./deleteThunk";
import { fetchThunk } from "./fetchThunk";
import { updateThunk } from "./updateFetch";
import { createThunk } from "./createThunk";

const thunks = {fetch: fetchThunk, create: createThunk ,update: updateThunk ,delete: deleteThunk}
const thunk = (text, type, data) => createAsyncThunk(text, async (passingData) => thunks[type](data ? data: passingData))

export { thunk }