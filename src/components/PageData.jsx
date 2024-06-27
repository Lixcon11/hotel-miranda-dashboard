import useDataProvider from "../hooks/useDataProvider";

const PageData = (title, columns, slice, sortDefault, filterDefault, searchFilter, filterList, detailsFormat, createFormat, toFetch, toCreate, toUpdate, toDelete) => {
    const newData = {}
    newData.title = title;
    newData.columns = columns;
    newData.filterList = filterList;
    newData.detailsFormat = detailsFormat;
    newData.createFormat = createFormat;
    newData.crud = {toCreate: toCreate, toUpdate: toUpdate, toDelete: toDelete};
    const dataParams = {slice: slice, sortDefault: sortDefault, filterDefault: filterDefault, searchFilter: searchFilter };
    const { data, loading, setSort, setFilter } = useDataProvider(dataParams, toFetch);
    newData.data = data;
    newData.loading = loading;
    newData.setSort = setSort;
    newData.setFilter = setFilter;

    return newData;
}

export { PageData }