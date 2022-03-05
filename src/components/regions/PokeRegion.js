import { useParams } from "react-router";
import regions from "../../data/region";

const PokeRegion = () => {
    let { regionId } = useParams();
    let region = regions.filter(x => regionId === x.Name)[0];
    return (
        region ?
                <>
                    <p>Region Name :{region.ProperName}</p>
                    <img src={"/assets/img/maps/" + region.Image} style={{ width: "80%" }} ></img>
                </>
        :<div>404 Böyle bir bölge yok/yada henüz Sisteme kaydedilmemiştir.</div>        
    );
}

export default PokeRegion;