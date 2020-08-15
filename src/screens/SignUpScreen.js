import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {signup} from "../server/fetch";
import Navbar from "../components/navbar";
import {Redirect} from "react-router-dom";

function SignUpScreen() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")


    useEffect(() => {
        window.scrollTo(0, 0);
    })

    function submitForm() {
        let data = {};
        data.email = email;
        data.password = password;
        signup(data).then(r => {
            console.log(r)
            alert(r.message + "\n Please login now!")
            window.location = '/loginScreen';
        })

    }

    return (
        <div className={"login-background"}>
            <Navbar/>
            <section>

                <div className="container mt-5 py-5">

                    <section className="px-md-5 mx-md-5 text-center text-lg-left text-white">

                        <div className="row d-flex">

                            <div className="col-md-6 ml-auto">

                                <form className="text-center" id="signup"
                                      onSubmit={event => {submitForm(); event.preventDefault()}}>

                                    <p className="h4 mb-4">Sign up</p>

                                    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4"
                                           placeholder="E-mail" required={true}
                                           onChange={event => setEmail(event.target.value)}/>

                                    <input type="password" id="defaultRegisterFormPassword" className="form-control"
                                           placeholder="Password" required={true}
                                           onChange={event => setPassword(event.target.value)}
                                           aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                    <small id="defaultRegisterFormPasswordHelpBlock"
                                           className="form-text text-muted mb-4">
                                        At least 8 characters and 1 digit
                                    </small>

                                    <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
                                    <hr/>
                                    <p>By clicking
                                        <em> Sign in</em> you agree to our terms of service
                                    </p>

                                </form>

                            </div>

                        </div>


                    </section>

                </div>
            </section>
        </div>
    );
}

export default SignUpScreen;
