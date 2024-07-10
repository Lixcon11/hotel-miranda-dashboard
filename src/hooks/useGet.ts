import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataState } from "../types";

const useGet = (name: string, crud: any, id: number) => {
    const dispatch = useDispatch()
    const obj = useSelector((state: DataState) => state[name].single)[0]
    
    useEffect(() => {
        dispatch(crud.toGet(id))
    }, [])
    
    return obj;
}

export { useGet }