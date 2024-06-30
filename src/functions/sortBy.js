const sortBy = (string, data) => {

    const newData = [...data];

    switch(string) {
        case "date": newData.sort((a, b) => {
            let dateA;
            let dateB;
            
            dateA = new Date(a.date);
            dateB = new Date(b.date);
            
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