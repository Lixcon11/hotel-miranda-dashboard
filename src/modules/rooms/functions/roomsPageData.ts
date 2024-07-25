import { crud } from "../features/roomsSlice";
import { NewFormats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const roomsPageData = () =>  PageData("rooms", NewFormats, crud, "roomNumber", undefined, "roomNumber")

export { roomsPageData }