
import { createUser, fetchUsers, updateUser } from "../features/userSlice";
import { deleteUser } from "../features/userSlice";
import { filterList } from "../../../functions/filterList";
import { tablePageData } from "../../../functions/pageData";
import { Columns } from "../components/Columns";

const userPageData = tablePageData(
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
)

export { userPageData }