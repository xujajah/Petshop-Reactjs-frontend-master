import React from "react";

function ServicesSection() {
    return (
        <section>
            <div className={'container text-center my-5'}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold'}>Our Services</h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 py-3">
                        <i className="fa fa-truck"/>
                        <h3 className={'h5 h5-responsive font-weight-bold text-muted'}>Relocate</h3>
                        <p className="text-muted mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                            minus neque quasi similique veritatis voluptas?</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 py-3">
                        <i className="fa fa-paw"/>
                        <h3 className={'h5 h5-responsive font-weight-bold text-muted'}>Breeding</h3>
                        <p className="text-muted mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                            minus neque quasi similique veritatis voluptas?</p>

                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 py-3">
                        <i className="fa fa-money-bill"/>
                        <h3 className={'h5 h5-responsive font-weight-bold text-muted'}>Buy/Sell</h3>
                        <p className="text-muted mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                            minus neque quasi similique veritatis voluptas?</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;