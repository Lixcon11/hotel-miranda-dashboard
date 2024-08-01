import { crudSlice } from "../../../functions/Features/crudSlice";
import { BookingState } from "../../../types";

const [ bookingsSlice, crud ] = crudSlice<BookingState>("bookings");

export { bookingsSlice, crud }