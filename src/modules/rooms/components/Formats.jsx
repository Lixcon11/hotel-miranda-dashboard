import styled from "styled-components";
import { createFormat } from "../../../functions/createFormats";
import { ImageContainerTable } from "../../../styles/ImageContainerTable";
import { MediumImg } from "../../../styles/MediumImg";

const Formats = createFormat(
    [
        {label: "Room Number", display: room => (
            <>
                <ImageContainerTable>
                    <img src={room.photos[0]}></img>
                    <div>
                        <p>{room.roomNumber}</p>
                    </div>
                </ImageContainerTable>
            </>
        ), sort: "roomNumber"},
        {label: "Room Type", property: "roomType"},
        {label: "Amenities", display: room => (
            <>
                {room.amenities.map((amenitie, i) => i+1 === room.amenities.length ? amenitie :amenitie + ", ")}
            </>
            )
        },
        {label: "Price", display: room => (
            <Night>
                <p>{`$${room.price}`}</p><p>&nbsp;/night</p>
            </Night>
        ), sort: "price"},
        {label: "Offer Price ", display: room => {
                if(room.discount) {
                    return (
                        <Night>
                        <p>{`$${room.price-room.price*(room.discount/100)}`}</p>
                        <p>&nbsp;/night</p>
                        </Night>
                    )
                }
                return "None"
            }
        },
        {label: "Status", property: "status"}
    ],
    [
        {display: (room, i) => room.photos.map(photo => <MediumImg key={i} src={photo}/>)},
        {label: "Room Number", property: "roomNumber"},
        {label: "Room Type", property: "roomType"},
        {label: "Amenities", display: room => (
            <>
                <p>{room.amenities.map((amenitie, i) => i+1 === room.amenities.length ? amenitie :amenitie + ", ")}</p>
            </>
        )},
        {label: "Price", display: room => ("$" + room.price)},
        {label: "Discount", display: room => (room.discount ? room.discount + "%": "None")},
        {label: "Status", property: "status"}
    ],
    [
        //to Add
    ],
    [
        {label: "All", toFilter: ""},
        {label: "Available", toFilter: "Available"},
        {label: "Booked", toFilter: "Booked"}
    ]
)

const Night = styled.div`
display: flex;
`

export { Formats }