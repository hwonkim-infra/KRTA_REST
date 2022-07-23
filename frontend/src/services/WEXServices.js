import http from '../http-common';

const getAll = () => {
    return http.get('/WEX');
};

const get = id => {
    return http.get(`/WEX/${id}`);
};

const create = data => {
    return http.post('/WEX', data);
}

const createChange = (data) => {
    return http.post(`/WEX/addChange/`, data);
}

const update = (id, data) => {
    return http.put(`/WEX/${id}`, data);
}

const addDrawings = (id, data) => {
    return http.put(`/WEX/${id}/drawings`, data);
}

const remove = id => {
    return http.delete(`/WEX/${id}`);
}

const WEXService = {
    getAll, get, create, update, remove, addDrawings, createChange
}

export default WEXService;



