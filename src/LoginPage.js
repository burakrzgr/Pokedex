import { Container, Row, Form, Button } from "react-bootstrap";

export default function LoginPage(params) {
    return (
        <>
            <Container >
                <Row className="">
                    {params.login ?
                        <div className="col-md-5 mx-auto card text-dark p-4">
                            <div id="first">
                                <div className="myform form ">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <h1>Login</h1>
                                        </div>
                                    </div>
                                    <Form action="" method="post" name="login">
                                        <div className="form-group text-start pt-2">
                                            <Form.Label htmlFor="exampleInputEmail1" >Email address</Form.Label>
                                            <Form.Control type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></Form.Control>
                                        </div>
                                        <div className="form-group text-start pt-2">
                                            <Form.Label htmlFor="exampleInputEmail1">Password</Form.Label>
                                            <Form.Control type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></Form.Control>
                                        </div>
                                        <div className="form-group pt-2">
                                            <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <Button type="submit" variant="primary" className="btn-block tx-tfm " style={{width:"50%"}}>Login</Button>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="login-or">
                                                <hr className="hr-or"></hr>
                                                <span className="span-or">or</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <p className="text-center">
                                                <a className="google btn mybtn"><i className="fa fa-google-plus">
                                                </i> Signup using Google
                                                </a>
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        :
                        <div id="second">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1 >Signup</h1>
                                    </div>
                                </div>
                                <Form action="#" name="registration">
                                    <Form.Group >
                                        <Form.Label htmlFor="exampleInputEmail1">First Name</Form.Label>
                                        <Form.Control type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname"></Form.Control>
                                    </Form.Group >
                                    <Form.Group >
                                        <Form.Label htmlFor="exampleInputEmail1">Last Name</Form.Label>
                                        <Form.Control type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"></Form.Control>
                                    </Form.Group >
                                    <Form.Group >
                                        <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                                        <Form.Control type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></Form.Control>
                                    </Form.Group >
                                    <Form.Group >
                                        <Form.Label htmlFor="exampleInputEmail1">Password</Form.Label>
                                        <Form.Control type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></Form.Control>
                                    </Form.Group >
                                    <div className="col-md-12 text-center mb-3">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="form-group">
                                            <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                                        </div>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    }
                </Row>
            </Container>

        </>
    );

}