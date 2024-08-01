import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Crud, DataState } from "../types";
import { AppDispatch } from "../store";

const useGet = (name: string, crud: Crud, id: string) => {
    const dispatch: AppDispatch  = useDispatch()
    const obj = useSelector((state: DataState) => state[name].single)[0]
    useEffect(() => {
        dispatch(crud.toGet(id))
    }, [])
    
    return obj;
}

export { useGet }