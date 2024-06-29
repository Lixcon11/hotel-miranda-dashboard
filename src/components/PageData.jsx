import useDataProvider from "../hooks/useDataProvider";

const PageData = (name, sortDefault, searchFilter, formats, crud) => {
    const newData = {}
    newData.title = name;
    newData.columns = formats.columns;
    newData.filtersList = formats.filtersList;
    newData.detailsFormat = formats.detailsFormat;
    newData.createFormat = formats.createFormat;
    newData.crud = {...crud}
    const dataParams = {sliceName: name, sortDefault: sortDefault, searchFilter: searchFilter };
    const { data, loading, setSort, setFilter } = useDataProvider(dataParams, newData.crud.toFetch);
    newData.data = data;
    newData.loading = loading;
    newData.setSort = setSort;
    newData.setFilter = setFilter;

    return newData;
}

export { PageData }