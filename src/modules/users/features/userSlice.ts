import { crudSlice } from "../../../functions/features/crudSlice";
import { UserState } from "../../../types";
import userData from "../data/usersData.json"

const data: UserState[] = userData as UserState[]

const [ userSlice, crud ] = crudSlice(data ,"users");

export { userSlice, crud }