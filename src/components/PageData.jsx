import useDataProvider from "../hooks/useDataProvider";

const PageData = (title, columns, slice, sortDeafult, filterDefault, searchFilter, filterList, toFetch, toCreate, toUpdate, toDelete) => {
    const newData = {}
    newData.title = title;
    newData.columns = columns;
    newData.filterList = filterList;
    newData.crud = {toCreate: toCreate, toUpdate: toUpdate, toDelete: toDelete}
    const dataParams = {slice: slice, sortDeafult: sortDeafult, filterDefault: filterDefault, searchFilter: searchFilter }
    const { data, loading, setSort, setFilter } = useDataProvider(dataParams, toFetch)
    newData.data = data;
    newData.loading = loading;
    newData.setSort = setSort;
    newData.setFilter = setFilter;

    return newData;
}

export { PageData }