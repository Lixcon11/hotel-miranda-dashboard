import { crud } from "../features/roomsSlice";
import { Formats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const roomsPageData = () =>  PageData("rooms", Formats, crud, "roomNumber", undefined, "roomNumber")

export { roomsPageData }