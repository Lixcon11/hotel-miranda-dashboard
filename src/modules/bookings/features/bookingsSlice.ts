import { crudSlice } from "../../../functions/features/crudSlice";
import { BookingState } from "../../../types";
//import bookingsData from "../data/bookingtData.json"

//const data: BookingState[] = bookingsData as BookingState[]

const [ bookingsSlice, crud ] = crudSlice<BookingState>(/*data ,*/"bookings");

export { bookingsSlice, crud }