
import { useParams } from "react-router-dom";
import { DeatilsOfAny } from "../../../components/DetailsOfAny";
import { Page } from "../../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../slice/userSlice";

const UserDetails = () => {
    const { userId } = useParams();
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.users).data
    const user = usersData.filter(data => data.id == userId)[0]

    useEffect(() => {
        if(!usersData[0]) {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <>
            <DeatilsOfAny data={user} type="user"/>
        </>
    )
}

export {UserDetails}