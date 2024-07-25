import { crud } from "../features/contactsSlice";
import { NewFormats } from "../components/Formats";
import { PageData } from "../../../components/PageData";

const contactsPageData = () => PageData("contacts", NewFormats, crud, "date", "Published", "name")

export { contactsPageData }