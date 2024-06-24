
import { useParams } from "react-router-dom";
import { DeatilsOfAny } from "../../../components/DetailsOfAny";
import userData from "../data/usersData.json"
import { Page } from "../../../components/Page";

const UserDetails = () => {
    const { userId } = useParams();
    const user = userData.filter(data => data.id == userId)[0]

    return (
        <>
            <Page>
                <DeatilsOfAny user={user}/>
            </Page>
        </>
    )
}

export {UserDetails}