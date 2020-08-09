import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <section>
            <Navbar/>
            <div className={'container my-5'}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold text-center'}>About Us</h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 py-3">
                        <p className="text-muted w-100">
                            Blue Paws Pet SHop is one of the globally know best place where
                            you can find answers to all the queries you are having in your mind. Whether you are
                            thinking about pet food or worried about relocating your pet we got you covered.
                            Wander through our website to find amazing features that would help to understand us better.
                            Our main motive is to spread awareness about Pets Love.

                            Our goal is to provide you ease in taking care of your pets. We also sell pet foods that is
                            filled with more nutrients that your pets need. We understand that our pets need a good
                            environment and our love to grow. As they also love us back.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 py-3">
                        <h2 className={'h3 h3-responsive'}>Pet Relocation</h2>
                        <p className="text-muted w-100">
                            We have helped thousands of people to relocate their pets. As all of us have a busy life and
                            most of us are always on the go. We ofter need a good place to leave of pets at, and
                            obviously pet homes is not everyone's choice. Because we want our pets to have a good
                            environment and a good partner. We can also help you to relocate your pets to other
                            countries. Navigate to our contact page and we are always there to help you.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 py-3">
                        <h2 className={'h3 h3-responsive'}>Pet Engagement</h2>
                        <p className="text-muted w-100">
                            If you want your pets to have a good partner and a family you are just at the right place.
                            We help people to collaborate to find a good mate for the pets. Our website is mainly
                            projected for the “Pet Engage” section where you can look for the appropriate mate for your
                            pet whether they are mammals, reptiles, hamsters, ferrets, mice, iguanas, cows, pigs or
                            birds.
                        </p>
                    </div>
                </div>

                <h2 className={'h3 h3-responsive text-center font-weight-bold mb-4'}>Gallery</h2>
                <div class="gallery" id="gallery">


                    <div class="mb-3 pics animation all 2">
                        <img class="img-fluid"
                             src="img/sg1.jpg"
                             alt="Card image cap"/>
                    </div>

                    <div class="mb-3 pics animation all 1">
                        <img class="img-fluid" src="img/lg1.jpg"
                             alt="Card image cap"/>
                    </div>

                    <div className="mb-3 pics animation all 2">
                        <img className="img-fluid"
                             src="img/lg2.jpg"
                             alt="Card image cap"/>
                    </div>

                    <div class="mb-3 pics animation all 1">
                        <img class="img-fluid" src="img/sg2.jpg"
                             alt="Card image cap"/>
                    </div>


                    <div class="mb-3 pics animation all 2">
                        <img class="img-fluid"
                             src="img/sg3.jpg"
                             alt="Card image cap"/>
                    </div>

                    <div class="mb-3 pics animation all 1">
                        <img class="img-fluid" src="img/lg3.jpg"
                             alt="Card image cap"/>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;