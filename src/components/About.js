import React from "react";
import {Link} from "react-router-dom";

function About() {
    return (
        <section>
            <div className={'container my-5'}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold text-center'}>About Us</h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-3">
                        <p className="text-muted mx-3 w-100 px-3">
                            Blue Paws Pet SHop is one of the globally know best place where you can
                            find answers to all the queries you are having in your mind. Whether you are thinking about
                            pet food or worried about relocating your pet we got you covered. Wander through our website
                            to find amazing features that would help to understand us better. Our main motive is to
                            spread awareness...
                            <br/> <br/>

                            <Link to={'/about'}>
                                <a className={"btn btn-info btn-sm rounded"}>Read More</a>
                            </Link>


                        </p>


                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-3">
                        <img className={"w-100 img-round"} src="img/about.jpg" alt="about pic"/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;