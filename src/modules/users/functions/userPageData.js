import { crud } from "../features/userSlice";
import { PageData } from "../../../components/PageData";
import { formats } from "../components/Formats";

const userPageData = () => PageData("users", "name", "name", formats, crud)

export { userPageData }