import { crud } from "../features/userSlice";
import { NewFormats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const usersPageData = () => PageData("users", NewFormats, crud, "name", undefined, "name")

export { usersPageData }