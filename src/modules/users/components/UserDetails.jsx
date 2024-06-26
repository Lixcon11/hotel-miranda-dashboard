import { useParams } from "react-router-dom";
import { DeatilsOfAny } from "../../../components/DetailsOfAny";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/userSlice";

const UserDetails = () => {
    const { userId } = useParams();
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users).data
    const user = usersData.filter(data => data.id == userId)[0]

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <DeatilsOfAny data={user} type="user"/>
        </>
    )
}

export {UserDetails}