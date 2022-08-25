import http from '../http-common';

const getAll = () => {
    return http.get('/TCF');
};

const get = id => {
    return http.get(`/TCF/${id}`);
};

const create = data => {
    return http.post('/TCF', data);
}

const update = (id, data) => {
    return http.put(`/TCF/${id}`, data);
}


const remove = id => {
    return http.delete(`/TCF/${id}`);
}

const TCFService = {
    getAll, get, create, update, remove,
}

export default TCFService;



