import { GeneralData } from "../components/GeneralData";

const pageData = (name, formats, crud, sortDefault, filterDefault, searchFilter) => (
    {
        generalData: (sort, filter) => GeneralData(name, formats, crud, sort, filter),
        tableVariables: {sortDefault: sortDefault, filterDefault: filterDefault, searchFilter: searchFilter}
    }
)

export { pageData }