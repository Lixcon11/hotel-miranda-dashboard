const sortBy = (string, data) => {

    let newData = data;

    switch(string) {
        case "date": newData.sort((a, b) => {
            let dateA;
            let dateB;
            if(a.start_date) {
                dateA = new Date(a.start_date);
                dateB = new Date(b.start_date);
            }
            else {
                dateA = new Date(a.date);
                dateB = new Date(b.date);
            }
            return dateA - dateB;
        })
            break;
        case "name": newData.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
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