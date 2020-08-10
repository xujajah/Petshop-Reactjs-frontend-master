import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {getDiscussions} from "../server/fetch";

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token1, setToken] = useState(undefined)

    useEffect(() => {
        let token = localStorage.getItem('token')

        if (token) {
            setIsAuthenticated(true)
            setToken(token)
            console.log("Authenticated", isAuthenticated)

        }
    })

    function getEmailFromId(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload).user.email.split("@")[0]
    }

    function logout() {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
        console.log("logged out")
    }

    //if token in local storage
    //state update, button replace email id
    //email id click logout - token delete localstorage sy
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark stylish-color-dark"}>

            <div className={"container"}>
                <img src="img/logo.png" height="50" alt="logo"/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}/>
                </button>

                <div className={"collapse navbar-collapse"} id="basicExampleNav">

                    <ul className={"navbar-nav mr-auto text-uppercase"}>
                        <Link to={'/'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Home</a>
                            </li>
                        </Link>
                        <Link to={'/Store'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Marketplace</a>
                            </li>
                        </Link>
                        <Link to={'/ContactScreen'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Contact Us</a>
                            </li>
                        </Link>
                        <Link to={'/Discussion'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">Discussion</a>
                            </li>
                        </Link>
                        <Link to={'/HowItWorks'}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href="#">How it Works</a>
                            </li>
                        </Link>
                    </ul>

                    <ul className={"nav navbar-nav nav-flex-icons ml-auto"}>
                        <li className={"nav-item"} id="navbar-static-support">

                            {isAuthenticated === false && <Link to={'/loginScreen'}>
                                <a href="" className={"nav-link waves-effect btn btn-sm btn-primary"}>Login <i
                                    className={"fas fa-user-plus"}>
                                </i>
                                </a>
                            </Link>
                            }
                            {isAuthenticated === true && <div className="d-flex">
                                <Link to={'/profile'}>

                                    <a className={"nav-link waves-effect btn btn-sm btn-primary"}>
                                        Profile <i className={"fas fa-user"}/>
                                    </a>
                                </Link>

                                <Link to={'/'}>
                                    <a onClick={() => logout()} className={"nav-link waves-effect btn btn-sm btn-danger"}>
                                        Logout {getEmailFromId(token1)}<i
                                        className={"fa fa-sign-out-alt"}>
                                    </i>
                                    </a>
                                </Link>
                            </div>
                            }



                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;