
import { useParams } from "react-router-dom";
import { DeatilsOfAny } from "../../components/DetailsOfAny";
import userData from "../data/usersData.json"

const UserDetails = () => {
    const { userId } = useParams();
    const user = userData.filter(data => data.id == userId)[0]

    return (
        <>
            <DeatilsOfAny user={user}/>
        </>
    )
}

export {UserDetails}