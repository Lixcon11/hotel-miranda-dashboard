import  { useDataProvider } from "../hooks/useDataProvider";

const GeneralData = (name, formats, crud, sort, filter) => {
    const newData = {}
    newData.title = name;
    newData.columns = formats.columns;
    newData.filtersList = formats.filtersList;
    newData.detailsFormat = formats.detailsFormat;
    newData.createFormat = formats.createFormat;
    newData.crud = {...crud}
    const { data, loading } = useDataProvider(name, crud.toFetch, sort, filter);
    newData.data = data;
    newData.loading = loading;
    
    return newData;
}

export { GeneralData }