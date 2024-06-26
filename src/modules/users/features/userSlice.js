import { crudSlice } from "../../../functions/features/crudSlice";
import userData from "../data/usersData.json"

const [ userSlice, fetchUsers, createUser, updateUser, deleteUser ] = crudSlice(userData ,"users");

export { userSlice, fetchUsers, createUser, updateUser, deleteUser }