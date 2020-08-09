import React, {useEffect} from 'react';
import '../css/App.css';
import Contact from "../components/Contact";
import Navbar from "../components/navbar";


function ContactScreen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className={"login-background"}>
            <Navbar/>
            <Contact/>
        </div>
    );
}

export default ContactScreen;
