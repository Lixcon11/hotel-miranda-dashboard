import { crudSlice } from "../../../functions/features/crudSlice";
import { UserState } from "../../../types";
import userData from "../data/usersData.json"

const [ userSlice, crud ] = crudSlice<UserState>(userData ,"users");

export { userSlice, crud }