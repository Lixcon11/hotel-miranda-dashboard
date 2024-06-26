import { fetchUsers } from "./fetchUsers";
import { slice } from "../../../functions/slice";
import { deleteUser } from "./deleteUser";
import { createUser } from "./createUser";
import { updateUser } from "./updateUser";

const userSlice = slice("users", fetchUsers, createUser, updateUser, deleteUser)

export { userSlice }