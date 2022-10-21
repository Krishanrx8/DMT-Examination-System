import { fetchWrapper } from "../helpers/fetch-wrapper";

const config = "https://localhost:7233";

const baseUrl = `${config}/Exam_Result`;

export const examResultService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(result_id) {
    return fetchWrapper.get(`${baseUrl}/${result_id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(result_id, params) {
    return fetchWrapper.put(`${baseUrl}/${result_id}`, params);
}

function _delete(result_id) {
    return fetchWrapper.delete(`${baseUrl}/${result_id}`);
}
