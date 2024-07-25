import { Slice } from "@reduxjs/toolkit";
import { thunk } from "./functions/features/thunk";
import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

type IdObject = {
    id: number
}

type Amenitie = 
    | "AC" 
    | "Breakfast" 
    | "Cleaning" 
    | "Grocery" 
    | "Shop Near"
    | "Wifi"
    | "Kitchen"
    | "Shower"
    | "Single Bed"
    | "Towels";

type RoomType = 
    | "Single Bed"
    | "Double Bed"
    | "Double Superior"
    | "Suite";



type BookingState = IdObject & {
    name: string;
    orderDate: string;
    checkInDate: string;
    checkOutDate: string;
    specialRequest: string;
    room: RoomState;
    status: "Check In" | "Check Out" | "In Progress";
}


type RoomState = IdObject & {
    roomNumber: string;
    description: string;
    photos: string[];
    roomType: RoomType;
    amenities: Amenitie[];
    price: number;
    discount: number;
    status: "Available" | "Booked";
}

type ContactState = IdObject & {
    name: string;
    date: string;
    email: string;
    phone: string;
    subject: string;
    comment: string;
    status: "Published" | "Archived"
}

type UserState = IdObject & {
    name: string;
    photo: string;
    email: string;
    phone: string;
    date: string;
    job: string;
    description: string;
    status: "Active" | "Inactive";
    password: string;
}


type DataState = UserState | ContactState | RoomState | BookingState;


type SliceState<T extends DataState> = {
    status: "idle" | "pending" | "fullfiled" | "rejected";
    data: T[];
    single: T[];
    error: null | string;
}

type AuthState  = {
    name?: string;
    email?: string;
    isLoggedIn?: boolean;
    photo?: string;
    id?: number;
}
  
type AuthAction = 
    | { type: "logIn"; payload: AuthState }
    | { type: "logOut" }
    | { type: "updateUser"; payload: Partial<AuthState> };

type AuthContextType  = { 
    authState: AuthState;
    authDispatch: React.Dispatch<AuthAction>;
}

type Crud = {
    toFetch: ReturnType<typeof thunk>,
    toGet: ReturnType<typeof thunk>,
    toCreate: ReturnType<typeof thunk>,
    toUpdate: ReturnType<typeof thunk>,
    toDelete: ReturnType<typeof thunk>
}

type CrudSliceReturn = [
    Slice<any>, Crud
];

type Display = {
    label?: string;
    property?: string;
    display?: (arr: any, arrr: any) => any;
    isButton?: boolean;
    isImage?: boolean;
    isCheckbox?: boolean;
    sort?: string;
    toFilter?: string;
}

type Formats = {
    columns: Display[];
    detailsFormat: Display[];
    createFormat: Display[];
    filtersList: Display[];
}

type DataPackage = Formats & {
    name: string;
    crud: Crud;
    loading: any;
    sortDefault: string;
    filterDefault: string | undefined;
    searchFilter: string;
}

export {SliceState, AuthState, AuthAction, AuthContextType, DataState, UserState, ContactState, BookingState, RoomState, CrudSliceReturn, Crud, Display, Formats, DataPackage, Amenitie}