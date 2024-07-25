import { DataState } from "../types";

type Filter = {
    word?: string;
    searchOn: string;
    type?: string;
}

const filterBy = (filter: Filter, data: DataState[]): DataState[] => {
    let newData = [...data]
    
    if(filter.word) {
        newData = newData.filter(r => r[filter.searchOn].includes(filter.word))
    }
    if(filter.type) {
        newData = newData.filter(r => r.status === filter.type)
    }

    return newData;
}

export { filterBy }