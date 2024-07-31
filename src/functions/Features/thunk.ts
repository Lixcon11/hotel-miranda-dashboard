import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteThunk } from "./deleteThunk";
import { fetchThunk } from "./fetchThunk";
import { updateThunk } from "./updateFetch";
import { createThunk } from "./createThunk";
import { getThunk } from "./getThunk";
import { DataState } from "../../types";

const thunks = {fetch: fetchThunk, get: getThunk, create: createThunk ,update: updateThunk ,delete: deleteThunk}
const thunk = (text: string, type: string/*, data: DataState[] = []*/, path: string) => createAsyncThunk(text, async (passingData?: string | Partial<DataState> | DataState) => thunks[type](/*data[0] ? data:*/path, passingData))

export { thunk }