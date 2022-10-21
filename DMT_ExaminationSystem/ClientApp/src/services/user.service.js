import { fetchWrapper } from "../helpers/fetch-wrapper";

const config = "https://localhost:7233";

const baseUrl = `${config}/Users`;

export const userService = {
    getAll,
    getById,
    create,
    update,
    login,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(user_id) {
    return fetchWrapper.get(`${baseUrl}/${user_id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function login(params) {
    return fetchWrapper.postDataForLogin(`${baseUrl}/login`, params);
}

function update(user_id, params) {
    return fetchWrapper.put(`${baseUrl}/${user_id}`, params);
}

function _delete(user_id) {
    return fetchWrapper.delete(`${baseUrl}/${user_id}`);
}
