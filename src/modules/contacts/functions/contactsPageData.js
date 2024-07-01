import { crud } from "../features/contactsSlice";
import { formats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const contactsPageData = () => PageData("contacts", formats, crud, "date", "Published", "name")

export { contactsPageData }