import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import PokeType from "./PokeType";

export default function PokeRow({ list }) {
    return (
        <Table bordered style={{boxShadow:"0 0 6px #444b",backgroundColor:"#ddd",color:"#222"}} >
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Type(s)
                    </th>
                    <th >
                        Description
                    </th>
                    <th>
                        Abilities
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
            {list ? list.map(x => {
                return (
                    <tr key={x.id} style={{backgroundColor:x.BColor,color:x.FColor}}>
                        <td>{x.Name}</td>
                        <td><PokeType list={x.Type} tooltipLevel={2}></PokeType></td>
                        <td>{x.Desc.substring(0, 60)+'...'}</td>
                        <td>{x.Ability.toString()}</td>
                        <td>
                            <Link to={"/pokemons/" + x.Name}>
                                <Button variant="outline-dark" className="mt-1">Go To Detail</Button>
                            </Link>
                        </td>
                    </tr>
                );
            }) : <></>}
        </tbody>
        </Table>
    );
}

