import { useLoading } from "../hooks/useLoading";
//substitute any
const PageData = (name: string, formats: Formats, crud: any, sortDefault: string, filterDefault: string, searchFilter: string): DataPackage => {
    const newData: DataPackage = {
        name: name,
        columns: formats.columns,
        filtersList: formats.filtersList,
        detailsFormat: formats.detailsFormat,
        createFormat: formats.createFormat,
        crud: {...crud},
        loading: useLoading(name, crud),
        sortDefault: sortDefault,
        filterDefault: filterDefault,
        searchFilter: searchFilter,
    }

    return newData;
}

type Display = {
    label?: string;
    property?: string;
    display?: (arr: any, arrr: any) => any,
    isButton?: boolean,
    sort?: string,
    toFilter?: string
}

type Formats = {
    columns: Display[];
    detailsFormat: Display[];
    createFormat: Display[];
    filtersList: Display[];
}

type DataPackage = Formats & {
    name: string;
    crud: any;
    loading: any;
    sortDefault: string;
    filterDefault: string;
    searchFilter: string;
}

export { PageData }