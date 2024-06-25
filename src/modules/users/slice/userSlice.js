import { fetchUsers } from "./fetchUsers";
import { slice } from "../../../functions/slice";
import { deleteUser } from "./deleteUser";

const userSlice = slice("users", fetchUsers, deleteUser)

export { userSlice }