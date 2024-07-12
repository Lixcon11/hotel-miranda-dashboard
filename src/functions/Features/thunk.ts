import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteThunk } from "./deleteThunk";
import { fetchThunk } from "./fetchThunk";
import { updateThunk } from "./updateFetch";
import { createThunk } from "./createThunk";
import { getThunk } from "./getThunk";

const thunks = {fetch: fetchThunk, get: getThunk, create: createThunk ,update: updateThunk ,delete: deleteThunk}
const thunk = (text: string, type: string, data: object = {}) => createAsyncThunk(text, async (passingData: number | object) => thunks[type](data ? data: passingData))

export { thunk }