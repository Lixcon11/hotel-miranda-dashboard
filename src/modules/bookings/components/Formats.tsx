import { useState } from "react";
import { PictureUploader } from "../../../components/PictureUploader";
import { createFormat } from "../../../functions/createFormats";
import { ImageContainerTable } from "../../../styles/ImageContainerTable";
import { MediumImg } from "../../../styles/MediumImg";
import { ImageProfile } from "../../../styles/ImageProfile";
import styled from "styled-components";
import React from "react";

const formats = createFormat(
    [
        {label: "Guest", property: "name", sort: "name"},
        {label: "Order Date", property: "orderDate", sort: "orderDate"},
        {label: "Check In", property: "checkInDate", sort: "checkInDate"},
        {label: "Check Out", property: "checkOutDate", sort: "checkOutDate"},
        {label: "Special Request", isButton: true, display: (booking: object) => {
            return (
            <button>
                View Notes
            </button>
            )
        }, },
        {label: "Room Type", display:({ room }) => <p>{room.roomType + " - " + room.roomNumber}</p>}
    ],
    [
        {label: "Guest", property: "name", sort: "name"},
        {label: "Check In", property: "checkInDate", sort: "checkInDate"},
        {label: "Check Out", property: "checkOutDate", sort: "checkOutDate"},
        {label: "Room Info", display:({ room }) => <p>{room.roomType + " - " + room.roomNumber}</p>},
        {label: "Price", display:({ room }) => (
            <Night>
                <p>{`$${room.price}`}</p><p>&nbsp;/night</p>
            </Night>
        )
        },
    ],
    [
        //to Add
    ],
    [
        {label: "All", toFilter: ""},
        {label: "Check In", toFilter: "Check In"},
        {label: "Check Out", toFilter: "Check Out"},
        {label: "In Progress", toFilter: "In Progress"}
    ]
)


const Night = styled.div`
//display: flex;
`

export { formats }