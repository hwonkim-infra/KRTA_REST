import http from '../http-common';

const getAll = () => {
    return http.get('/Blog');
};

const get = id => {
    return http.get(`/Blog/${id}`);
};

const create = data => {
    return http.post('/Blog', data);
}

const update = (id, data) => {
    return http.put(`/Blog/${id}`, data);
}


const remove = id => {
    return http.delete(`/Blog/${id}`);
}

const BlogService = {
    getAll, get, create, update, remove,
}

export default BlogService;



