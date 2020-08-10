import React from "react";

function StoreItem({item}) {

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    function imageMaker() {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(item.img.data.data);

        return (base64Flag + imageStr)
    }

    return (
        <div>
            <div className="card">
                <div className="view view-cascade overlay">
                    <img src={imageMaker()}
                         className="card-img-top img-300 img-fluid"
                         alt="sample photo"
                    />
                </div>
                <div className="card-body">
                    <a href="" className="text-muted">
                        <p className="text-muted text-sm font-small py-0 mb-1">Category: {item.category}</p>
                    </a>
                    <h4 className="card-title py-0 my-0">
                        <strong>
                            <a href='#' data-toggle="modal" data-target={"#modal-" + item._id} className="font-weight-bold">{item.title}</a>
                        </strong>
                    </h4>
                    <p className="card-text">{item.description}
                    </p>
                </div>
                <div className="card-footer">
                    <span className="float-left">{item.price} PKR</span>
                    <span className="float-right">
                    <a className="material-tooltip-main" data-toggle="modal" data-target={"#modal-" + item._id}>
                      <i className="fas fa-eye ml-3"/>
                    </a>
                  </span>
                </div>
            </div>
            <div className="modal fade" id={"modal-" + item._id} tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{item.title}</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src={imageMaker()}
                                         className="img-fluid" alt={"item"}/>
                                         <br/>
                                    <table className="table-sm table-responsive table-borderless">
                                        <tbody>
                                        <tr>
                                            <td>Title:</td>
                                            <td>{item.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Desc:</td>
                                            <td>{item.description}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-6">
                                    <table className="table-sm table-responsive table-striped">
                                        <tbody>
                                        <tr>
                                            <td>Price:</td>
                                            <td>{item.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Type:</td>
                                            <td>{item.type}</td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td>{item.city}</td>
                                        </tr>
                                        <tr>
                                            <td>Category:</td>
                                            <td>{item.category}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreItem;
