import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLoading = (name, crud) => {
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state[name])
    
    const loading = useMemo(() => {
        if(status === "idle") {
            dispatch(crud.toFetch())
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