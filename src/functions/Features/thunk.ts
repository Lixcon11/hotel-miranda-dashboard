import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, DataState, Method } from "../../types";
import { callAPI } from "./callAPI";

const thunk = (text: string, method: Method, path: string) => createAsyncThunk(text, async (passingData?: string | Partial<DataState> | DataState) => {
    let url: string = `${import.meta.env.VITE_API_DOMAIN}/${path}/`
    const { token } = JSON.parse(localStorage.getItem("auth") as string) as AuthState;

    switch(method) {
        case "PATCH":
        case "PUT":
            if(typeof passingData !== "string") {
                url = url + passingData._id;
                return callAPI(url, token, method, passingData)
            }
            break;
        case "GET":
        case "DELETE":
            if(typeof passingData == "string") {
                url = url + passingData;
            }
            return callAPI(url, token, method)
        case "POST":
            if(typeof passingData !== "string") {
                return callAPI(url, token, method, passingData)
            }
            break;
        default:
            return null;
    }
})

export { thunk }