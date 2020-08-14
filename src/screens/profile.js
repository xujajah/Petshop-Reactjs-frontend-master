import React, {useState, useEffect} from 'react';
import Navbar from "../components/navbar";
import {delete_QUESTION_ADS, getDiscussions, getProfile} from "../server/fetch";

function Profile() {
    let [profile, setProfile] = useState(undefined)

    useEffect(() => {
        window.scrollTo(0, 0);

        if (profile === undefined) {
            getProfile().then(r => {
                console.log(r)
                setProfile(r)
            })
        }
    })

    function deleteAd(id) {
        delete_QUESTION_ADS("A", id).then(res => {
            if (res.deletedCount === 1) {
                alert("Deleted Successfully.")
                setProfile(undefined)
            } else {
                alert("Error. Can not delete.")
            }
        })
    }

    function deleteQ(id) {
        delete_QUESTION_ADS("Q", id).then(res => {
            if (res.deletedCount === 1) {
                alert("Deleted Successfully.")
                setProfile(undefined)
            } else {
                alert("Error. Can not delete.")
            }
        })
    }

    // function empty() {
    //     if (profile.discussion.length === 0) {
    //         console.log(profile.discussion.length)
    //         return (
    //             <div>
    //                 <p className="text-muted">
    //                     No Record Found
    //                 </p>
    //             </div>
    //         )
    //     }
    //
    // }

    return (
        <section>
            <Navbar/>
            <div className={'container my-5'}>
                <div className="row">
                    <div className="col-12 my-3">
                        <h2 className={'h2 h2-responsive font-weight-bold'}>Welcome to Your Profile</h2>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <h3 className={'h3 h3-responsive'}>My Discussions</h3>
                        <table className="table-sm table-responsive table-borderless">
                            <tbody>
                            {profile && profile.discussions.map(item =>

                                <tr key={item._id}>
                                    <td>{item.question}</td>
                                    <td><a className="text-danger" onClick={() => deleteQ(item._id)}>Delete</a></td>
                                </tr>

                            )}
                            </tbody>
                        </table>
                        {profile && profile.discussions.length === 0 &&
                        <div>
                            <p className="text-muted">
                                no record found
                            </p>
                        </div>
                        }
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <h3 className={'h3 h3-responsive'}>Ad Posts</h3>
                        <table className="table-sm table-responsive table-borderless">
                            <tbody>
                            {profile && profile.ads.map(item => (
                                <div>
                                    <tr key={item._id}>
                                        <td>{item.title}</td>
                                        <td><a className="text-danger" onClick={() => deleteAd(item._id)}>Delete</a>
                                        </td>
                                    </tr>
                                </div>

                            ))}
                            </tbody>
                        </table>
                        {profile && profile.ads.length === 0 &&
                        <div>
                            <p className="text-muted">
                                no record found
                            </p>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;