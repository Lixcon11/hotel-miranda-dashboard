import { useLoading } from "../hooks/useLoading";

const PageData = (name, formats, crud, sortDefault, filterDefault, searchFilter) => {
    const newData = {}
    newData.name = name;
    newData.columns = formats.columns;
    newData.filtersList = formats.filtersList;
    newData.detailsFormat = formats.detailsFormat;
    newData.createFormat = formats.createFormat;
    newData.crud = {...crud}
    newData.loading = useLoading(name, crud)
    newData.sortDefault = sortDefault;
    newData.filterDefault = filterDefault;
    newData.searchFilter = searchFilter;

    return newData;
}

export { PageData }