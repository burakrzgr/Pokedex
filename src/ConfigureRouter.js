import MainComp from './MainComp'
import PokeRegion from './components/regions/PokeRegion'
import PokeTypes from './components/types/PokeTypes';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function ConfigureRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<MainComp></MainComp>} />
                    <Route path="pokemons" element={<MainComp></MainComp>} />
                    <Route path="types" element={<PokeTypes></PokeTypes>} />
                    <Route path="region" >
                        <Route index element={<p>Bölge Seçiniz</p>} ></Route>
                        <Route path="maps" element={<h3>Henüz Tamamlanmadı.</h3>} />
                        <Route path=":regionId" element={<PokeRegion />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ConfigureRouter;