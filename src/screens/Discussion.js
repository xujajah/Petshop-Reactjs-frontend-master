import React, {useEffect, useState} from "react";
import {addAnswer, get, getDiscussions, postNewQuestion} from "../server/fetch";
import Navbar from "../components/navbar";

function Discussion() {
    let [data, getData] = useState(undefined)
    let [question, setQuestion] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);

        if (data === undefined) {
            getDiscussions().then(r => {
                console.log(r)
                getData(r)
            })
        }

    })

    function postQuestion() {
        let data = {
            question: question
        };
        postNewQuestion(data).then(r => {
            console.log(r);
            // if (r._id) {
            //     getData(undefined)
            //     window.location.reload();
            // }
            // else {
            //     alert("Can not post.")
            // }
            if(r === undefined){
                alert("login first")
                window.location = '/loginScreen';
            }
            else{
                alert("Question Posted.")
                window.location.reload();
            }
        })
    }

    function SubmitAns(qid) {
        let data = {
            text: question
        };
        addAnswer(data, qid).then(r => {
            console.log(r);
            // if (r.n === 1) {
            //     alert("Answer Posted.")
            //     window.location.reload();
            // }
            if(r === undefined){
                alert("login first")
                window.location = '/loginScreen';
            }
            else{
                alert("Answer Posted.")
                window.location.reload();
            }
        })
    }

    return (
        <div>
            <Navbar/>
            <div className={'container my-5'}>
                <div className="row z-depth-1 rounded p-4">
                    <div className="col-8">
                        <h4 className="font-weight-bold">Looking for answers to your most common pet questions?</h4>
                        <h6 className="font-weight-bold">Our community of pet lovers is here to answer!</h6>
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn btn-primary" data-toggle="modal"
                                data-target="#modalLoginForm"><i className="fas fa-comment pr-3"/>Ask now.
                        </button>
                    </div>
                </div>
                <br/>
                <div className="row mt-4 border-bottom">
                    <div className="col-12 mb-2">
                        <h6 className="h6 font-weight-bold">Trending Discussions</h6>
                    </div>
                </div>
                <br/>
                <div className="row">
                    {data && data.map((item) => (
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body row">
                                    <div className="col-5">
                                        <p className="font-weight-bold text-truncate mb-0">{item.question}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-muted mb-0">Comments:<span
                                            className="badge badge-danger ml-2">{item.comments.length}</span></p>
                                    </div>
                                    <div className="col-4">
                                        <a className="btn btn-primary btn-sm" data-toggle="modal"
                                           data-target={"#modal-" + item._id}>View Thread</a>
                                    </div>
                                </div>
                            </div>


                            <div className="modal fade" id={"modal-" + item._id} tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{item.question}
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="#" onSubmit={event => {
                                                event.preventDefault();
                                                SubmitAns(item._id)
                                            }}>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <input type="text" placeholder={"Your answer here"}
                                                               required={true}
                                                               className="form-control"
                                                               onChange={event => setQuestion(event.target.value)}/>
                                                    </div>
                                                    <div className="col-4">
                                                        <button type={"submit"}
                                                                className="btn btn-primary btn-sm">Answer
                                                        </button>
                                                    </div>
                                                </div>

                                            </form>
                                            {item.comments.map(comment => (
                                                <table
                                                    className="table table-striped table-sm table-borderless mx-auto table-scroll-vertical">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="text-primary font-small font-weight-bold">{comment.author.email.split("@")[0]}: </span> {comment.text}
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog"
                         aria-labelledby="myModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">Ask Question</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="modal-body mx-3">
                                    <form action="#" onSubmit={event => {
                                        postQuestion();
                                        event.preventDefault()
                                    }}>
                                        <div className="mb-5">
                                    <textarea className="form-control validate mb-2" placeholder="Type Here..."
                                              onChange={event => setQuestion(event.target.value)}/>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary" id="postAdd" type="submit">
                                                POST QUESTION
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discussion;


