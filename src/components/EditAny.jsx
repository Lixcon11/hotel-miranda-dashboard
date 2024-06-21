import { useParams } from "react-router-dom"

const EditAny = () => {
    const { userId } = useParams();
    console.log(userId)
    
    return (
        <>
            <input type="text" placeholder="Something"></input>
        </>
    )
}

export {EditAny}