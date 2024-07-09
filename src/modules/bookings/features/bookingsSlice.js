import { crudSlice } from "../../../functions/features/crudSlice";
import bookingsData from "../data/bookingtData.json"

const [ bookingsSlice, crud ] = crudSlice(bookingsData ,"bookings");

export { bookingsSlice, crud }