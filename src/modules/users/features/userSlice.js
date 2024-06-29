import { crudSlice } from "../../../functions/features/crudSlice";
import userData from "../data/usersData.json"

const [ userSlice, crud ] = crudSlice(userData ,"users");

export { userSlice, crud }