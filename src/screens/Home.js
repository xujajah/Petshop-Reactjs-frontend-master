import React, {useEffect, useState} from 'react';
import Carousal from '../components/carousal'
import ServicesSection from "../components/services";
import About from "../components/About";
import '../css/App.css';
import PopularPets from '../components/PopularPets';
import Navbar from "../components/navbar";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (

        <div>
            <Navbar/>
            <Carousal/>
            <ServicesSection/>
            <About/>
            <PopularPets/>
        </div>
    );
}

export default Home;
