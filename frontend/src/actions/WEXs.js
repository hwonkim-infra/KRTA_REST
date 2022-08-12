import { PRODUCT_LIST, PRODUCT_DETAILS, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_CREATE_CHANGE } from './types'
import WEXService from '../services/WEXServices';

export const getWEXs = () => async (dispatch) => {
    try {
        const res = await WEXService.getAll();
        dispatch({
            type: PRODUCT_LIST,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getWEX = (id) => async (dispatch) => {
    try {
        const res = await WEXService.get(id);
        
        dispatch({
            type: PRODUCT_DETAILS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}


export const createWEX = (data) => async (dispatch) => {
    try {
        const res = await WEXService.create(data);
        dispatch({
            type: PRODUCT_CREATE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateWEX = (id, data) => async (dispatch) => {
    try {
        const res = await WEXService.update(id, data);
        // console.log("🚀 ~ file: WEXs.js ~ line 32 ~ updateWEX ~ data", data)
        
        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const createWEXChange = (data) => async (dispatch) => {
    try {
        const res = await WEXService.createChange(data);
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
        const res = await WEXService.addDrawings(id, data);

        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}



export const deleteWEX = (id) => async (dispatch) => {
    try {
        await WEXService.remove(id);
        dispatch({
            type: PRODUCT_DELETE,
            payload: {id},
        })
    } catch (err) {
        console.log(err);
    }
}