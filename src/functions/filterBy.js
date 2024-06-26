const filterBy = (filter, data) => {
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