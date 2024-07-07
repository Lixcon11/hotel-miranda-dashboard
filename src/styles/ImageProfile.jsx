import styled from "styled-components";

const ImageProfile = styled.img`
    width:  150px;
    height: 150px;
    border-radius: 50%;
`

const MiniImageProfile = styled(ImageProfile)`
    width:  40px;
    height: 40px;
`

const BedImage = styled(ImageProfile)`
    border-radius: 10%;
    width:  270px;
`

export { ImageProfile, MiniImageProfile, BedImage }