import React from "react";
import info from "./info";

let token = localStorage.getItem('token')

export function getStore() {
    return fetch(info.URI + '/shop', {method: 'get',})
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        }).catch(r => {
            console.log(r)
        });
}

export function getDiscussions() {
    return fetch(info.URI + "/discuss", {method: 'get',})
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        }).catch(r => {
            console.log(r)
        });
}

export function signup(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded
    };

    return fetch(info.URI + "/signup", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}

export function login(data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();

    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(info.URI + "/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}

export function postAdvertisement(data) {
    let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer "+token);

    let urlencoded = new FormData();

    urlencoded.append("image", data.image);
    urlencoded.append("title", data.title);
    urlencoded.append("price", data.price);
    urlencoded.append("name", data.name);
    urlencoded.append("phone", data.phone);
    urlencoded.append("category", data.category);
    urlencoded.append("type", data.type);
    urlencoded.append("city", data.city);
    urlencoded.append("description", data.description);




    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(info.URI + "/shop/ad", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}

export function postNewQuestion(data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer "+token);
    console.log("Bearer "+token)
    let urlencoded = new URLSearchParams();
    urlencoded.append("question", data.question);
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    return fetch(info.URI + "/discuss/ask", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(error => console.log('error', error));
}

export function addAnswer(data, qid) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer "+token);
    console.log("Bearer "+token)
    let urlencoded = new URLSearchParams();
    urlencoded.append("text", data.text);
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    return fetch(info.URI + "/discuss/answer/"+qid, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(error => console.log('error', error));
}

export function getProfile() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(info.URI + "/profile", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}

export function delete_QUESTION_ADS(type, id) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    return fetch(info.URI + "/delete/"+type+"/"+id, requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}
export function contact(data) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();

    urlencoded.append("email", data.email);
    urlencoded.append("name", data.name);
    urlencoded.append("subject", data.subject);
    urlencoded.append("message", data.message);


    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(info.URI + "/contact", requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
}