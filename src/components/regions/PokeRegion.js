import { useParams } from "react-router";

const PokeRegion = () => {
    let { regionId } = useParams();
    return (
        <>
            <p>Region Name :{regionId}</p>
            <img src={"/assets/img/maps/" + regionId + "_map.png"} style={{width:"80%"}} ></img>
        </>
    );
}

export default PokeRegion;