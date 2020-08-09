import React from "react";

function PopularPets() {
    return (
        <section>
            <div className={"container my-5"}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold text-center'}>Popular Pets</h2>
                    </div>
                </div>

                <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                    <div className={"row"}>
                        <div className="controls-top mx-auto">
                            <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i
                                className="fas fa-chevron-left"></i></a>
                            <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                                className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active">

                            <div className={"row"}>
                                <div className="col-md-4">
                                    <div className=" mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/cat-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>


                                <div className="col-md-4">
                                    <div className=" mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/dog-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className=" mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/fish-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="carousel-item">

                            <div className={"row"}>
                                <div className="col-md-4">
                                    <div className="mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/parrot-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className=" mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/rabbit-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className=" mb-2">
                                        <a href="">
                                            <img className="card-img-top w-75"
                                                 src="img/horse-pet.png"
                                                 alt="Card image cap"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularPets;