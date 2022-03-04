import { useParams } from "react-router";

const PokeRegion = () => {
    let { regionId } = useParams();
    return (
        <>
            <p>Region Name :{regionId}</p>
            <p>Description : This Location is not prepared yet!</p>
        </>
    );
}

export default PokeRegion;