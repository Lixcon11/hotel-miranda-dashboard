import { fetchUsers } from "./fetchUsers";
import { slice } from "../../../functions/slice";
import { deleteUser } from "./deleteUser";
import { createUser } from "./createUser";

const userSlice = slice("users", fetchUsers, deleteUser, createUser)

export { userSlice }