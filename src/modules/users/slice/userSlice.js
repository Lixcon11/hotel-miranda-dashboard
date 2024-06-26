import { crudSlice } from "../../../functions/Features/crudSlice";
import userData from "../data/usersData.json"

const [ userSlice, fetchUsers, createUser, updateUser, deleteUser ] = crudSlice(userData ,"users");

export { userSlice, fetchUsers, createUser, updateUser, deleteUser }