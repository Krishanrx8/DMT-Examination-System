import { fetchWrapper } from '../helpers/fetch-wrapper';

const config = 'https://localhost:7233';

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

function getById(user_id) {
    return fetchWrapper.get(`${baseUrl}/${user_id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(user_id, params) {
    return fetchWrapper.put(`${baseUrl}/${user_id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(user_id) {
    return fetchWrapper.delete(`${baseUrl}/${user_id}`);
}
