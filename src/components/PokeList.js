import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";

export default function PokeList({ list }) {
    return (
        <>
            {list ? list.map(x => {
                return (
                    <Link  key={x} to={"/pokemons/"+x}>
                        <Button variant="outline-dark" className="mt-1">{x}</Button>
                    </Link>
                );
            }) : <></>}
        </>
    );
}

