import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";

function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
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
                        <h3 className={'h3 h3-responsive'}>Comments/Question</h3>
                        <table className="table-sm table-responsive table-borderless">
                            <tr>
                                <th>Comment/Question</th>
                                <th>Action</th>
                            </tr>
                            <tbody>
                            <tr>
                                <td>Title:</td>
                                <td><a>Delete</a> <a>Update</a></td>
                            </tr>
                            <tr>
                                <td>Desc:</td>
                                <td><a>Delete</a> <a>Update</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                        <h3 className={'h3 h3-responsive'}>Add Posts</h3>
                        <table className="table-sm table-responsive table-borderless">
                            <tr>
                                <th>Comment/Question</th>
                                <th>Action</th>
                            </tr>
                            <tbody>
                            <tr>
                                <td>Title:</td>
                                <td><a>Delete</a> <a>Update</a></td>
                            </tr>
                            <tr>
                                <td>Desc:</td>
                                <td><a>Delete</a> <a>Update</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;