
import { thunk } from "../../../functions/thunk";

const deleteUser = thunk("users/deleteUser", "", "delete")

export { deleteUser }