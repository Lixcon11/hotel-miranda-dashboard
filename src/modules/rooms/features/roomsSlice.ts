import { crudSlice } from "../../../functions/features/crudSlice";
import { RoomState } from "../../../types";
import roomsData from "../data/roomsData.json"

const [ roomsSlice, crud ] = crudSlice<RoomState>(roomsData ,"rooms");

export { roomsSlice, crud }