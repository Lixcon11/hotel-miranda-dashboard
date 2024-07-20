import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteThunk } from "./deleteThunk";
import { fetchThunk } from "./fetchThunk";
import { updateThunk } from "./updateFetch";
import { createThunk } from "./createThunk";
import { getThunk } from "./getThunk";
import { DataState } from "../../types";

const thunks = {fetch: fetchThunk, get: getThunk, create: createThunk ,update: updateThunk ,delete: deleteThunk}
const thunk = (text: string, type: string, data: DataState[] = []) => createAsyncThunk(text, async (passingData: number | object) => thunks[type](data[0] ? data: passingData))

export { thunk }