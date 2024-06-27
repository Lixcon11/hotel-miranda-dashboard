
import { createUser, fetchUsers, updateUser } from "../features/userSlice";
import { deleteUser } from "../features/userSlice";
import { filterList } from "../../../functions/filterList";
import { PageData } from "../../../components/PageData";
import { Columns } from "../components/Columns";
import { DetailsFormat } from "../components/DetailsFormat";
import { CreateFormat } from "../components/CreateFormat";

const userPageData = () => (
    PageData(
    "Users", 
    Columns, 
    "users", 
    "name", 
    undefined, 
    "name", 
    filterList.user,
    DetailsFormat,
    CreateFormat, 
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
))

export { userPageData }