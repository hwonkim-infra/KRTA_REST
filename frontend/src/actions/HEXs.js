import { PRODUCT_LIST, PRODUCT_DETAILS, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_CREATE_CHANGE } from './types'
import HEXService from '../services/HEXServices';

export const getHEXs = () => async (dispatch) => {
    try {
        const res = await HEXService.getAll();
        dispatch({
            type: PRODUCT_LIST,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getHEX = (id) => async (dispatch) => {
    try {
        const res = await HEXService.get(id);
        
        
        dispatch({
            type: PRODUCT_DETAILS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}


export const createHEX = (data) => async (dispatch) => {
    try {
        const res = await HEXService.create(data);
        dispatch({
            type: PRODUCT_CREATE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateHEX = (id, data) => async (dispatch) => {
    try {
        const res = await HEXService.update(id, data);
        // console.log("🚀 ~ file: HEXs.js ~ line 32 ~ updateHEX ~ data", data)
        
        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const createHEXChange = (data) => async (dispatch) => {
    try {
        const res = await HEXService.createChange(data);
        dispatch({
            type: PRODUCT_CREATE_CHANGE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const addDrawings = (id, data) => async (dispatch) => {
    try {
        const res = await HEXService.addDrawings(id, data);

        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}



export const deleteHEX = (id) => async (dispatch) => {
    try {
        await HEXService.remove(id);
        dispatch({
            type: PRODUCT_DELETE,
            payload: {id},
        })
    } catch (err) {
        console.log(err);
    }
}