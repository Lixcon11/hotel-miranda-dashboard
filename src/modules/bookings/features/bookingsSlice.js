import { crudSlice } from "../../../functions/features/crudSlice";
import bookingsData from "../data/bookingtData.json"

const [ bookingsSlice, fetchBookings, createBooking, updateBooking, deleteBooking ] = crudSlice(bookingsData ,"bookings");

export { bookingsSlice, fetchBookings, createBooking, updateBooking, deleteBooking }