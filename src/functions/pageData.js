const tablePageData = (title, columns, slice, sortDeafult, filterDefault, searchFilter, filterList, toFetch, toCreate, toUpdate, toDelete) => {
    const data = {}
    data.title = title;
    data.columns = columns;
    data.dataParams = {slice: slice, sortDeafult: sortDeafult, filterDefault: filterDefault, searchFilter: searchFilter }
    data.filterList = filterList;
    data.crud = {toFetch: toFetch, toCreate: toCreate, toUpdate: toUpdate, toDelete: toDelete}

    return data;
}

export { tablePageData }