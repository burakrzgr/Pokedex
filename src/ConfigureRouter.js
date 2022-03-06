import MainComp from './MainComp'
import PokeRegion from './components/regions/PokeRegion'
import PokeTypes from './components/types/PokeTypes';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './LoginPage';

function ConfigureRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<MainComp></MainComp>} />
                    <Route path="pokemons">
                        <Route index element={<MainComp></MainComp>} />
                        <Route path=":search" element={<MainComp></MainComp>} />
                    </Route>
                    <Route path="types" >
                        <Route index element={<PokeTypes></PokeTypes>}></Route>
                        <Route path=":type" element={<PokeTypes></PokeTypes>}></Route>
                    </Route>
                    <Route path="region" >
                        <Route index element={<p>Bölge Seçiniz</p>} ></Route>
                        <Route path="maps" element={<h3>Henüz Tamamlanmadı.</h3>} />
                        <Route path=":regionId" element={<PokeRegion />} />
                    </Route>
                    <Route path="login" >
                        <Route index element={<LoginPage login={true}></LoginPage>} ></Route>
                        <Route path="maps" element={<h3>Henüz Tamamlanmadı.</h3>} />
                        <Route path=":regionId" element={<PokeRegion />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ConfigureRouter;