import { crud } from "../features/contactsSlice";
import { formats } from "../components/Formats";
import { pageData } from "../../../functions/pageData";

const contactsPageData = () => pageData("contacts", formats, crud, "date", "Published", "name")

export { contactsPageData }