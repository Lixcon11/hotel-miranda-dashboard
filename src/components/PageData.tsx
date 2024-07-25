import { useLoading } from "../hooks/useLoading";
import { Crud, DataPackage, Formats } from "../types";

const PageData = (name: string, formats: Formats, crud: Crud, sortDefault: string, filterDefault: string | undefined, searchFilter: string): DataPackage => {
    const newData: DataPackage = {
        name: name,
        columns: formats.columns,
        filtersList: formats.filtersList,
        detailsFormat: formats.detailsFormat,
        createFormat: formats.createFormat,
        crud: crud,
        loading: useLoading(name, crud),
        sortDefault: sortDefault,
        filterDefault: filterDefault,
        searchFilter: searchFilter,
    }

    return newData;
}

export { PageData }