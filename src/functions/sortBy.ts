import { DataState } from "../types";

const sortBy = (string: string, data: DataState[]): DataState[] => {

    const newData = [...data];

    switch(string) {
        case "checkOutDate":
        case "checkInDate":
        case "orderDate":
        case "date": newData.sort((a, b) => {
            let dateA;
            let dateB;
            
            dateA = new Date(a[string]);
            dateB = new Date(b[string]);
            
            return dateA - dateB;
        })
            break;
            
        case "price":
        case "name": newData.sort((a, b) => {
            if (a[string] < b[string]) {
              return -1;
            }
            if (a[string] > b[string]) {
              return 1;
            }
            return 0;
        })
            break;
        default: null;
            break;
    }

    return newData;

}

export { sortBy };