import { crud } from "../features/bookingsSlice";
import { formats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const bookingsPageData = () => PageData("bookings", formats, crud, "orderDate", undefined, "name")

export { bookingsPageData }