import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Crud, DataState } from "../types";
import { AppDispatch } from "../store";

const useLoading = (name: string, crud: Crud): boolean => {
    const dispatch: AppDispatch = useDispatch()
    const {status, error} = useSelector((state: any) => state[name])
    
    const loading = useMemo(() => {
        if(status === "idle") {
            dispatch(crud.toFetch(""))
        }
        if(status === "pending") {
            return true;
        }
        if(status === "rejected") {
            alert(`Error: ${error}`)
        }

        return false;
    }, [status, name])
    
    return loading;
}

export { useLoading }