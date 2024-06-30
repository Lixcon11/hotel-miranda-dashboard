import { crudSlice } from "../../../functions/features/crudSlice";
import roomsData from "../data/roomsData.json"

const [ roomsSlice, crud ] = crudSlice(roomsData ,"rooms");

export { roomsSlice, crud }