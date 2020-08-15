import React, {useEffect, useRef, useState} from "react";
import {postAdvertisement} from "../server/fetch";

function PostNewForm() {
    let [image, setImage] = useState("")
    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [name, setSellerName] = useState("")
    let [phone, setContactNumber] = useState("")
    let [category, setCategory] = useState("")
    let [description, setDescription] = useState("")
    let [type, setType] = useState("")
    let [city, setCity] = useState("")

    const inputRef = useRef()

    useEffect(() => {

    })

    function postAdd() {
        console.log("postadd")
        let data = {
            image: image,
            title: title,
            price: price,
            name: name,
            phone: phone,
            category: category,
            description: description,
            type: type,
            city: city
        };

        postAdvertisement(data).then(r => {
            console.log(r)
            if(r === undefined){
                alert("login first")
                window.location = '/loginScreen';
            }
            else{
                alert(r.title + " has been posted!")
                window.location.reload();
            }
            // if (r.title){
            //     alert(r.title + " has been posted!")
            // }else{
            //     alert("You need to login first.")
            // }
        })
    }

    return (
        <div>
            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Post new Ad.</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body mx-3">
                            <form action="#" onSubmit={() => postAdd()}>
                                <div className="mb-3">
                                    <div className="custom-file mb-3">
                                        <label className="custom-file-label" htmlFor="customFileLang">Select Image</label>
                                        <input type="file" className="custom-file-input" id="customFileLang" lang="en"
                                               accept="image/*"
                                               onChange={() => setImage(inputRef.current.files[0])}
                                               ref={inputRef}/>
                                    </div>
                                    <input type="text" className="form-control validate mb-2" placeholder="Ad Listing Title"
                                           onChange={event => setTitle(event.target.value)}/>
                                    <select className="browser-default custom-select mb-2"
                                            onChange={event => setCategory(event.target.value)}>
                                        <option selected disabled>Select Category</option>
                                        <option value="cat">Cat</option>
                                        <option value="dog">Dog</option>
                                        <option value="horse">Horse</option>
                                        <option value="fish">Fish</option>
                                        <option value="bird">Birds</option>
                                        <option value="rabbit">Rabbit</option>
                                        <option value="other">Others</option>
                                    </select>
                                    <input type="number" className="form-control validate mb-2"
                                           placeholder="Listing Price in PKR"
                                           onChange={event => setPrice(event.target.value)}/>
                                    <input type="text" className="form-control validate mb-2" placeholder="Seller Name"
                                           onChange={event => setSellerName(event.target.value)}/>
                                    <input type="number" className="form-control validate mb-2"
                                           placeholder="Seller Contact Number"
                                           onChange={event => setContactNumber(event.target.value)}/>
                                    <input type="description" className="form-control validate mb-2"
                                           placeholder="Pet Description"
                                           onChange={event => setDescription(event.target.value)}/>
                                    <select className="browser-default custom-select mb-2"
                                            onChange={event => setType(event.target.value)}>
                                        <option selected disabled>Select Type</option>
                                        <option value="1">Sale</option>
                                        <option value="2">Relocate</option>
                                        <option value="3">Engage</option>
                                    </select>
                                    <select className="browser-default custom-select mb-2"
                                            onChange={event => setCity(event.target.value)}>
                                        <option selected disabled>Select City</option>
                                        <option value="gujranwala">Gujranwala</option>
                                        <option value="lahore">Lahore</option>
                                        <option value="karachi">Karachi</option>
                                        <option value="islamabad">Islamabad</option>
                                        <option value="faisalabad">Faisalabad</option>
                                        <option value="multan">Multan</option>
                                        <option value="quetta">Quetta</option>
                                        <option value="sargodha">Sargodha</option>
                                        <option value="other">Other</option>

                                    </select>
                                </div>
                                <button className="btn btn-primary" id="postAdd" type="submit">
                                    POST YOUR AD
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewForm;