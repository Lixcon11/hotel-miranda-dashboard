import { crud } from "../features/userSlice";
import { formats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const usersPageData = () => PageData("users", formats, crud, "name", undefined, "name")

export { usersPageData }