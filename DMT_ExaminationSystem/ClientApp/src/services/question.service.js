import { fetchWrapper } from "../helpers/fetch-wrapper";

const config = "https://localhost:7233";

const baseUrl = `${config}/Question_Bank`;

export const questionService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(question_id) {
    return fetchWrapper.get(`${baseUrl}/${question_id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(question_id, params) {
    return fetchWrapper.put(`${baseUrl}/${question_id}`, params);
}

function _delete(question_id) {
    return fetchWrapper.delete(`${baseUrl}/${question_id}`);
}
