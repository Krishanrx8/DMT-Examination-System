import { fetchWrapper } from "../helpers/fetch-wrapper";

const config = "https://localhost:7233";

const baseUrl = `${config}/Exam`;

export const examService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(exam_id) {
    return fetchWrapper.get(`${baseUrl}/${exam_id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(exam_id, params) {
    return fetchWrapper.put(`${baseUrl}/${exam_id}`, params);
}

function _delete(exam_id) {
    return fetchWrapper.delete(`${baseUrl}/${exam_id}`);
}
