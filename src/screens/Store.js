import React, {useEffect, useState} from "react";
import PostNewForm from "../components/post_new_ad_modal";
import {get} from "../server/fetch";
import StoreItem from "../components/storeItem";
import Navbar from "../components/navbar";

function Store() {
    let [data, getData] = useState(undefined)

    useEffect(() => {
        window.scrollTo(0, 0);

        if (data === undefined) {
            get("/shop").then(r => {
                getData(r)
            })
        }

    })

    return (
        <div>
            <Navbar/>
            <div className={'container my-5'}>

                <div className="row z-depth-1 rounded p-4">
                    <div className="col-8">
                        <h4 className="font-weight-bold">Looking for a new home for your pet?</h4>
                        <h6 className="font-weight-bold">Or you have pet accessories to sell!</h6>
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn btn-primary" data-toggle="modal"
                                data-target="#modalLoginForm"><i className="fa fa-paw pr-3"/>Post your Ad.
                        </button>
                    </div>
                </div>
                <br/>
                <div className="row mt-4 border-bottom">
                    <div className="col-12">
                        <h6 className="h6 font-weight-bold">Latest Ads.</h6>
                    </div>
                </div>
                <div className="row">
                    {data && data.map((item, key) => {
                        return (
                            <div className="col-12 col-sm-4 my-3" key={key}>
                                <StoreItem item={item}/>
                            </div>
                        )
                    })}
                </div>
                <PostNewForm/>
            </div>
        </div>
    )
}

export default Store;
