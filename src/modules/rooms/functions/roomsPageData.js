import { crud } from "../features/roomsSlice";
import { Formats } from "../components/Formats";
import { pageData } from "../../../functions/pageData";

const roomsPageData = () => pageData("rooms", Formats, crud, "roomNumber", undefined, "roomNumber")

export { roomsPageData }