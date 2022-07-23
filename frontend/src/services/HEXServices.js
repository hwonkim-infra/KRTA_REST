import http from '../http-common';

const getAll = () => {
    return http.get('/HEX');
};

const get = id => {
    return http.get(`/HEX/${id}`);
};

const create = data => {
    return http.post('/HEX', data);
}

const createChange = (data) => {
    return http.post(`/HEX/addChange/`, data);
}

const update = (id, data) => {
    return http.put(`/HEX/${id}`, data);
}

const addDrawings = (id, data) => {
    return http.put(`/HEX/${id}/drawings`, data);
}

const remove = id => {
    return http.delete(`/HEX/${id}`);
}

const HEXService = {
    getAll, get, create, update, remove, addDrawings, createChange
}

export default HEXService;



