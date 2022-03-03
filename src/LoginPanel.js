import {Navbar,Container,NavDropdown,Nav} from "react-bootstrap";

function LoginPanel() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"><h1 style={{color:'rgb(253, 207, 27)',fontWeight:"800",fontFamily:"cursive",fontSize:"xxx-large"}} className="text-border p-1 ps-4">Pokedex</h1></Navbar.Brand>
                <div className="ps-5 pe-5" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/pokemons">Pokemons</Nav.Link>
                        <Nav.Link href="/types">Types</Nav.Link>
                        <NavDropdown title="Regions" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/region/kanto">Kanto</NavDropdown.Item>
                            <NavDropdown.Item href="/region/johto">Johto</NavDropdown.Item>
                            <NavDropdown.Item href="/region/hoenn">Hoenn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/region/maps">Maps</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="ms-3 me-3 seperator" ></Nav.Item>
                        <Nav.Link href="/pazar">Canlı Poke Pazarı</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LoginPanel;