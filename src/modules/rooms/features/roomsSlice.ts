import { crudSlice } from "../../../functions/Features/crudSlice";
import { RoomState } from "../../../types";
//import roomsData from "../data/roomsData.json"

//const data: RoomState[] = roomsData as RoomState[]

const [ roomsSlice, crud ] = crudSlice<RoomState>(/*data ,*/"rooms");

export { roomsSlice, crud }