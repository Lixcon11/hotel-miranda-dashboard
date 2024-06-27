
import { createUser, fetchUsers, updateUser } from "../features/userSlice";
import { deleteUser } from "../features/userSlice";
import { filterList } from "../../../functions/filterList";
import { PageData } from "../../../components/PageData";
import { Columns } from "../components/Columns";

const userPageData = () => (
    PageData(
    "Users", 
    Columns, 
    "users", 
    "", 
    undefined, 
    "name", 
    filterList.user, 
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
))

export { userPageData }