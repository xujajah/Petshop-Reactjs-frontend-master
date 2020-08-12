import React, {useEffect, useState} from "react";
import {contact, login, signup} from "../server/fetch";

function Contact() {

    let [email, setEmail] = useState("")
    let [name, setName] = useState("")
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")



    useEffect(() => {
        window.scrollTo(0, 0);

    })
    function submitForm() {
        let data = {
            email: email,
            name: name,
            subject: subject,
            message: message
        };
        console.log(data)
        contact(data).then(r => {
            if (r.status ===1){
                alert("Email Sent.")
            }
        })
    }

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 ml-auto">

            <section className="contact-section dark-grey-text mb-5">

                <div className="card">
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={event => {submitForm(); event.preventDefault()}} id={"contact-form"}>
                            <div className="card-body form">
                                <h2 className={'h2 h2-responsive font-weight-bold text-center'}>Contact Us</h2>
                                <h2 className={'h5 h5-responsive font-weight-bold text-center'}>
                                    ---<i className={"fa fa-paw text-danger"}/>---
                                </h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" className="form-control mb-4"
                                                   placeholder="Name" required={true}
                                                   onChange={event => setName(event.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="email" className="form-control mb-4"
                                                   placeholder="E-mail" required={true}
                                                   onChange={event => setEmail(event.target.value)}/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" className="form-control mb-4"
                                                   placeholder="Subject" required={true}
                                                   onChange={event => setSubject(event.target.value)}/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <textarea type="text" className="form-control mb-4 px-3 rounded"
                                                   rows="4" placeholder="Message" required={true}
                                                   onChange={event => setMessage(event.target.value)}/>
                                        </div>
                                        <button className={"btn btn-info rounded mt-2"} type="submit">SEND</button>
                                    </div>

                                </div>

                            </div>
                            </form>

                        </div>
                        <div className="col-lg-12">

                            <div className="card-body contact text-center bg-dark h-100 white-text">

                                <h3 className="font-weight-bold my-4 pb-2">Contact information</h3>
                                <ul className="text-lg-left list-unstyled ml-4">
                                    <li>
                                        <p><i className="fas fa-map-marker-alt pr-2"/>Lahore, Punjab, Pakistan</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone pr-2"/>0320-0987654</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope pr-2"/>contact@bluepaws.com</p>
                                    </li>
                                </ul>
                                <hr className="hr-light my-4"/>
                                <ul className="list-inline text-center list-unstyled">
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg tw-ic">
                                            <i className="fab fa-youtube"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg li-ic">
                                            <i className="fab fa-facebook-f"/>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg ins-ic">
                                            <i className="fab fa-instagram"/>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            </div>
            </div>
        </div>

    )
}

export default Contact;