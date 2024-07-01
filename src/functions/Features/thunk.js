import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteThunk } from "./deleteThunk";
import { fetchThunk } from "./fetchThunk";
import { updateThunk } from "./updateFetch";
import { createThunk } from "./createThunk";
import { getThunk } from "./getThunk";

const thunks = {fetch: fetchThunk, get: getThunk, create: createThunk ,update: updateThunk ,delete: deleteThunk}
const thunk = (text, type, data) => createAsyncThunk(text, async (passingData) => thunks[type](data ? data: passingData))

export { thunk }