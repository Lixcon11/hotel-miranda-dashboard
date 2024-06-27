import { useParams } from "react-router-dom";
import { DeatilsOfAny } from "../../../components/DetailsOfAny";
import { DetailsFormat } from "./DetailsFormat";
import { userPageData } from "../functions/userPageData";

const UserDetails = () => {
    const { userId } = useParams();

    return (
        <>
            <DeatilsOfAny format={DetailsFormat} pageData={userPageData} id={userId}/>
        </>
    )
}

export {UserDetails}