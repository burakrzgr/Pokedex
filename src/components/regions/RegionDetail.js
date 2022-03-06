import React from "react";
import PokeList from "../PokeList";


function RegionDetail({ data }) {
    return (
        <>
            <div className="container " style={{zIndex: 2,position: "relative"}}>
                <div className="main-body">
                    <nav aria-label="breadcrumb" className="main-breadcrumb mb-2 card">
                        <div className="m-2">
                            <ol className="text-dark text-start ps-0 mb-0"><h5>Location Detail</h5></ol>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="pokemon_world">Pokemon World</a></li>
                                <li className="breadcrumb-item "><a href={data.Nation}>{data.Nation}</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{data.ProperName}</li>
                            </ol>
                        </div>
                    </nav>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={"/assets/img/maps/" + data.Image} alt="Map" className="rounded border border-secondary p-1" width="80%" />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">{data.ProperName} Region</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Proffesors</h6>
                                        <span className="text-secondary">{data.Proffesors.toString()}</span>
                                    </li>
                                    <li className="list-group-item ">
                                        <h6 className="mb-0 text-start">Starter Pokemons</h6>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <PokeList list={data.Starters}> </PokeList>
                                            
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Villains</h6>
                                        <span className="text-secondary">{data.Villains.toString()}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">League</h6>
                                        <span className="text-secondary">{data.League.toString()}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 text-start">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 text-primary">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0 text-primary">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 text-primary">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 text-primary">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 text-primary">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%", ariaValuenow: "80", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%", ariaValuenow: "72", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%", ariaValuenow: "89", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%", ariaValuenow: "55", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%", ariaValuenow: "66", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%", ariaValuenow: "80", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%", ariaValuenow: "72", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%", ariaValuenow: "89", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%", ariaValuenow: "55", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: "5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%", ariaValuenow: "66", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: 'url("/assets/img/maps/' + data.Image + '")',
                filter: "blur(5px)", height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width:"100%",
                position:"absolute"
            }}
            ></div>
        </>
    );
}

export default RegionDetail;