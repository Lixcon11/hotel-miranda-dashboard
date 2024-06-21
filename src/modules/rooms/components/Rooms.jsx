import { useState } from "react"
import { Display } from "../../../components/Display"
import { Header } from "../../../components/Header"
import { Table } from "../../../components/Table"
import rooomsData from "../data/roomsData.json"
import { Columns } from "./Columns"

const Rooms = () => {
    let newData = rooomsData;
    const [data, setData] = useState(newData);

    const columns = [
        {label: "Room Name", display: room => (
            <>
                <img src={`${room.photo_1}`} className="photo"></img>
                <div className="inline-block">
                    <p>{room.room_number}</p>
                </div>
            </>
        )},
        {label: "Bead Type", property: "room_type"},
        {label: "Amenities", display: room => (
            room.amenities.map((amenitie, i) => amenitie ? <p key={i}>other</p> : <p key={i}>stuff</p>)
        ) },
        {label: "Price", property: "price"},
        {label: "Offer Price ", display: room => (
            <>
                {`${room.discount} %`}
            </>
        )},
    ];
    return (
        <>
            <Header>Rooms</Header>
            <Display>
                <Table data={data} columns={columns}/>
            </Display>
        </>
    )
}

export {Rooms}