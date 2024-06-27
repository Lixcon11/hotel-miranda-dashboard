import { DeatilsOfAny } from "../../../components/DetailsOfAny";
import { DetailsFormat } from "./DetailsFormat";
import { userPageData } from "../functions/userPageData";

const UserDetails = () => <DeatilsOfAny format={DetailsFormat} pageData={userPageData}/>

export {UserDetails}