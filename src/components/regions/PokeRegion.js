import { useParams } from "react-router";
import regions from "../../data/region";
import RegionDetail from "./RegionDetail";

const PokeRegion = () => {
    let { regionId } = useParams();
    let region = regions.filter(x => regionId === x.Name)[0];
    return (
        region ?
                <>
                    <RegionDetail data={region}></RegionDetail>
                </>
        :<div>404 Böyle bir bölge yok/yada henüz Sisteme kaydedilmemiştir.</div>        
    );
}

export default PokeRegion;