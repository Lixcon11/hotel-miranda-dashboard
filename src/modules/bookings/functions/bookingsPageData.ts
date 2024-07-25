import { crud } from "../features/bookingsSlice";
import { NewFormats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const bookingsPageData = () => PageData("bookings", NewFormats, crud, "orderDate", undefined, "name")

export { bookingsPageData }