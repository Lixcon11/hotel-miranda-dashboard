import { crudSlice } from "../../../functions/Features/crudSlice";
import { UserState } from "../../../types";
//import userData from "../data/usersData.json"

//const data: UserState[] = userData as UserState[]

const [ userSlice, crud ] = crudSlice<UserState>(/*data ,*/"users");

export { userSlice, crud }