const filterBy = (filter, data) => {
    if(filter){
        return data.filter(r => r.status === filter)
    }
    else {
        return data;
    }
}

export { filterBy }