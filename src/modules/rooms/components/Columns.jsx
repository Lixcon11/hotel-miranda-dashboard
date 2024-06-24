import { ImageContainerTable } from "../../../styles/ImageContainerTable";

const Columns = [
    {label: "Room Name", display: room => (
        <>
            <ImageContainerTable>
                <img src={room.photo_1}></img>
                <div>
                    <p>{room.room_number}</p>
                </div>
            </ImageContainerTable>
        </>
    )},
    {label: "Bead Type", property: "room_type"},
    {label: "Price", property: "price"},
    {label: "Offer Price ", display: room => (
        <>
            {`${room.discount}%`}
        </>
    )},
];

export { Columns }