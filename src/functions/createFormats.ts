import { Display, Formats } from "../types"

const createFormat = (columns: Display[], detailsFormat: Display[], createFormat: Display[], filtersList: Display[]): Formats => (
    {
    columns: columns, 
    detailsFormat: detailsFormat,
    createFormat: createFormat,
    filtersList: filtersList
    }
)

export {createFormat}