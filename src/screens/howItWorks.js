import React, {useState, useEffect} from 'react';
import Navbar from "../components/navbar";

function HowItWorks() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <section>
            <Navbar/>
            <div className={'container my-5'}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold text-center'}>How It Works</h2>
                        <h2 className={'h6 h6-responsive font-weight-bold text-center'}>
                            ---<i className={"fa fa-paw text-danger"}/>---
                        </h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h3 h3-responsive'}>Pet Engagement</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <p className="text-muted w-100">
                            For domestic animals mating is a very essential process that should be carried out with
                            certain considerations like the perfect mate, health, timing and environment. With science
                            progressing we now have artificial mating process as well that is said to be safer as
                            compared to natural mating. But if you are up for a natural pet engage there is no better
                            website than AgentPet.com. AgentPet.com has been created with the purpose of providing its
                            customers the ultimate comfort of finding their pet a mate. On our website you will find:
                            <ul>
                                <li>
                                    Different breeds of different animals.
                                </li>
                                <li>
                                    Medical history of your chosen pet for mating.
                                </li>
                            </ul>
                            For our pet engage section we strongly recommend to our users to mention the behavior traits
                            as well as the history of their pets in detail. It would be a huge advantage for the users
                            while selecting the pet for the engage process.
                            Pet engage is not an easy task therefore, we would not accept any pet to be displayed on our
                            website without rigorous and thorough information.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <img className={"w-100 rounded"} src="img/breeding.jpg" alt=""/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h3 h3-responsive'}>Pet Buy/Sell</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <img className={"w-100 rounded"} src="img/buy-sell.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <p className="text-muted w-100">
                            AgentPet.com is one of the most famous and profoundly used websites all over the world. We
                            wholly welcome our users to advertise their pets who either want to sell or buy them. Among
                            our many pages, pet buying and selling is the most visited. We have every section available
                            on our page therefore, if you have a unique pet like crocodile, monkey, ferret, cow, hamster
                            etc. you will find your desired section on our website and also your fellow companions who
                            have the same interest in pets as yours.

                            We have made dealing and transactions on our page very stress-free and uncomplicated. Simply
                            advertise your pet by leaving some pictures and details that will attract the visitor
                            towards your pet. You can contact the owner on his mentioned email or contact number.

                            Our website and experts behind it will ascertain that there are no fake accounts or forged
                            deals with the clients. Moreover, we have all the information of our every user that makes
                            our website safer and spam-free. So log in right now to AgentPet.com and choose your pet!
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h3 h3-responsive'}>Pet Relocation</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <p className="text-muted w-100">
                            We have helped thousands of people to relocate their pets. As all of us have a busy life and
                            most of us are always on the go. We ofter need a good place to leave of pets at, and
                            obviously pet homes is not everyone's choice. Because we want our pets to have a good
                            environment and a good partner. We can also help you to relocate your pets to other
                            countries. Navigate to our contact page and we are always there to help you.
                            But for relocation of you pets a few things are important. And the top one is its
                            vaccination. If you are taking your pet on a trip or permanently somewhere it is very
                            important to get it vaccinated. The most dangerous disease that a pet like cat, dog, ferret
                            etc. can carry easily is rabies. So, our website strictly requests a vaccinated pet to move
                            along with a certificate of vaccination. Lastly, our website requests an allowance
                            certificate from your veterinarian that claims that it is safe for your pet to fly.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <img className={"w-100 rounded"} src="img/relocate.jpg" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold text-center mt-3'}>
                            ------<i className={"fa fa-paw text-danger"}/>------
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;