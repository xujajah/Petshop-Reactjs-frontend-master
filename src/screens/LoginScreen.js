import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import {login} from "../server/fetch";
import Home from "./Home";
import Navbar from "../components/navbar";


function LoginScreen() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loggedin, setLoggedIN] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

    })


    function submitForm() {
        let data = {
            email: email,
            password: password
        };

        console.log(data)
        login(data).then(r => {
            console.log(r)
            if (r.token) {
                localStorage.setItem('token', r.token);
                setLoggedIN(true)
                window.location = '/';
                window.location.reload();

            } else if (r.error) {
                alert(r.error)
            } else {
                alert("Failed...")
            }
        })
    }

    return (
        <div className={"login-background"}>
            <Navbar/>
            <container>
                <section className="p-5 mt-md-5 ">

                    <form className="my-5 mx-md-5" action="">

                        <div className="row">
                            <div className="col-md-6 ml-auto">
                                <div className=" bg-transparent">

                                    <div className="card-body px-5">

                                        <form className="text-center" action="#" id="loginForm"
                                              onSubmit={event => {submitForm(); event.preventDefault()}}>

                                            <h3 className="font-weight-bold my-4 pb-2 text-center text-white">Log
                                                In</h3>

                                            <input type="email" className="form-control mb-4"
                                                   placeholder="E-mail" required={true}
                                                   onChange={event => setEmail(event.target.value)}/>

                                            <input type="password" required={true}
                                                   className="form-control" placeholder="Password"
                                                   onChange={event => setPassword(event.target.value)}/>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-rounded my-4 waves-effect">Log In
                                                </button>
                                                <small id=""
                                                       className="form-text text-right blue-text text-center">
                                                    <span className={"black-text"}>
                                                        Do not have an account?
                                                    </span>
                                                    <Link to={"/SignUpScreen"}>
                                                        <a href=""> Sign Up</a>
                                                    </Link>

                                                </small>
                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>

                </section>

            </container>
        </div>
    );
}

export default LoginScreen;
