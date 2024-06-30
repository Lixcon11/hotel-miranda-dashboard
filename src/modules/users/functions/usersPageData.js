import { crud } from "../features/userSlice";
import { formats } from "../components/Formats";
import { pageData } from "../../../functions/pageData";

const usersPageData = () => pageData("users", formats, crud, "name", undefined, "name")

export { usersPageData }