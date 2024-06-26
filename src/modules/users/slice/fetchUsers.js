import userData from "../data/usersData.json"
import { thunk } from "../../../functions/thunk";

const fetchUsers = thunk("users/fetchUsers", userData)

export { fetchUsers }