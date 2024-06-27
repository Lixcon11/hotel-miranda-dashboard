import { useMemo, useState } from "react";
import { filterBy } from "../functions/filterBy";
import { sortBy } from "../functions/sortBy";
import { useDispatch, useSelector } from "react-redux";


const useDataProvider = (dataParams, toFetch) => {
    const {slice ,sortDeafult, filterDefault, searchFilter} = dataParams;
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState (sortDeafult);
    const [filter, setFilter] = useState ({type: filterDefault, word: "", searchOn: searchFilter});
    const obj = useSelector(state => state[slice])
    const objStatus = obj.status;
    const objData = obj.data;
    const objError = obj.error;
    const dispatch = useDispatch();
    
    const data = useMemo(() => {
        let newData = []

        if(objStatus === "fulfilled") {
            newData = filterBy(filter, objData);
            newData = sortBy(sort, newData);
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
    }, [filter, sort, objStatus])

    return {data, loading, setSort, setFilter};
}

export default useDataProvider;