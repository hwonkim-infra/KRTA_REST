import { PRODUCT_LIST, PRODUCT_DETAILS, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_CREATE_CHANGE } from './types'
import BlogService from '../services/BlogServices';

export const getBlogs = () => async (dispatch) => {
    try {
        const res = await BlogService.getAll();
        dispatch({
            type: PRODUCT_LIST,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getBlog = (id) => async (dispatch) => {
    try {
        const res = await BlogService.get(id);
        
        
        dispatch({
            type: PRODUCT_DETAILS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}


export const createBlog = (data) => async (dispatch) => {
    try {
        const res = await BlogService.create(data);
        dispatch({
            type: PRODUCT_CREATE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateBlog = (id, data) => async (dispatch) => {
    try {
        const res = await BlogService.update(id, data);
        // console.log("🚀 ~ file: Blogs.js ~ line 32 ~ updateBlog ~ data", data)
        
        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}


export const deleteBlog = (id) => async (dispatch) => {
    try {
        await BlogService.remove(id);
        dispatch({
            type: PRODUCT_DELETE,
            payload: {id},
        })
    } catch (err) {
        console.log(err);
    }
}