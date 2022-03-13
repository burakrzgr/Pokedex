import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function PokeRow({ list }) {
    return (
        <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    Type(s)
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
                        <td>{x.Type.toString()}</td>
                        <td>{x.Desc.substring(0, 60)}...</td>
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

