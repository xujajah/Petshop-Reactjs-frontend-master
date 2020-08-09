import React from "react";
function Footer() {
    return(
        <footer className="page-footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 text-center">
                        <img src="img/logo.png" height="50" alt="logo"/>
                    </div>
                    <div className="col-12 col-md-6 pt-3">
                        <p className="text-center text-light">
                            Copyright &copy; 2020 | All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-3 col-12 pt-3">
                        <p className="text-light text-center">
                            Follow us:
                            <i className={"fab fa-facebook-f pl-2"}/>
                            <i className="fab fa-instagram pl-2"/>
                            <i className="fab fa-youtube pl-2"/>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;