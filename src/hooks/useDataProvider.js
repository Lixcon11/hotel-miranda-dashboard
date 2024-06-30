import { useEffect, useMemo, useState } from "react";
import { filterBy } from "../functions/filterBy";
import { sortBy } from "../functions/sortBy";
import { useDispatch, useSelector } from "react-redux";


const useDataProvider = (name, toFetch, sort, filter) => {
    const [loading, setLoading] = useState(true);
    const obj = useSelector(state => state[name])
    const objStatus = obj.status;
    const objData = obj.data;
    const objError = obj.error;
    const dispatch = useDispatch();
    
    const data = useMemo(() => {
        let newData = []
        if(objStatus === "fulfilled") {
            newData = [...objData]
            if(sort || filter) {
                newData = filterBy(filter, newData);
                newData = sortBy(sort, newData);
            }
            setLoading(false);
            return newData;
        }
        if(objStatus === "rejected") {
            alert(`Error: ${objError}`)
            setLoading(false);
        }
        else if(objStatus === "pending") {
            setLoading(true);
        }
        else if(objStatus === "idle") {
            dispatch(toFetch())
        }

        return [];
    }, [filter, sort, objStatus, name])
    
    return {data, loading};
}

export { useDataProvider };