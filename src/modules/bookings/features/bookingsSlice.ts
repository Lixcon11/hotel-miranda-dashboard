import { crudSlice } from "../../../functions/features/crudSlice";
import { BookingState } from "../../../types";
import bookingsData from "../data/bookingtData.json"

const [ bookingsSlice, crud ] = crudSlice<BookingState>(bookingsData ,"bookings");

export { bookingsSlice, crud }