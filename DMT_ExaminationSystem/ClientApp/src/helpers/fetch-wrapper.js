import SessionManager from "./SessionManager";

export const fetchWrapper = {
    get,
    post,
    postDataForLogin,
    put,
    delete: _delete
};

function get(url) {
    let token = SessionManager.getToken();
    const requestOptions = {
        method: 'GET',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    let token = SessionManager.getToken();
    const requestOptions = {
        method: 'POST',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function postDataForLogin(url, body) {
    let requestOptions = {
        method: 'POST',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    }
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    let token = SessionManager.getToken();
    const requestOptions = {
        method: 'PUT',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    let token = SessionManager.getToken();
    const requestOptions = {
        method: 'DELETE',
        headers: {
            "access-control-allow-origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}