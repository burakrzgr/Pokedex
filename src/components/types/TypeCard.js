import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function TypeCard({ data }) {
    return (
        <Link to={"/types/" + data.Name} style={{ width: '14rem'}} className="m-3">
            <Card style={{ backgroundColor: data.Style.Detail_Bg, color: data.Style.Detail_Fg }} >
                <Card.Body>
                    <Card.Title style={{ backgroundColor: data.Style.Header_Bg, color: data.Style.Header_Fg }} className="p-1 m-0 rounded" >{data.Name}</Card.Title>
                    <Card.Text style={{ fontSize: "15px", overflowY: 'auto', height: '10rem' }}  >
                        {data.Desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default TypeCard;