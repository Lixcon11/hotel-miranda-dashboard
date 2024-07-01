import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGet = (name, crud, id) => {
    const dispatch = useDispatch()
    const obj = useSelector(state => state[name].single)[0]
    
    useEffect(() => {
        dispatch(crud.toGet(id))
    }, [])
    
    return obj;
}

export { useGet }