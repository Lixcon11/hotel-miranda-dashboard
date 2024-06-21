const Columns = [
    {label: "Room Name", display: room => (
        <>
            <img src={`${room.photo_1}`} className="photo"></img>
            <div className="inline-block">
                <p>{room.room_number}</p>
            </div>
        </>
    )},
    {label: "Bead Type", property: "room_type"},
    {label: "Amenities", property: "amenities"},
    {label: "Price", property: "price"},
    {label: "Offer Price ", display: room => (
        <>
            {`${room.discount} %`}
        </>
    )},
];

export { Columns }