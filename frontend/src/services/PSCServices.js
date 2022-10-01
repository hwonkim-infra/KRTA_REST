import http from '../http-common';

const getAll = () => {
    return http.get('/PSC');
};

const get = id => {
    return http.get(`/PSC/${id}`);
};

const create = data => {
    return http.post('/PSC', data);
}

const update = (id, data) => {
    return http.put(`/PSC/${id}`, data);
}


const remove = id => {
    return http.delete(`/PSC/${id}`);
}

const PSCService = {
    getAll, get, create, update, remove,
}

export default PSCService;



