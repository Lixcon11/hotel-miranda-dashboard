import { crudSlice } from "../../../functions/features/crudSlice";
import roomsData from "../data/roomsData.json"

const [ roomsSlice, fetchRooms, createRoom, updateRoom, deleteRoom ] = crudSlice(roomsData ,"rooms");

export { roomsSlice, fetchRooms, createRoom, updateRoom, deleteRoom }