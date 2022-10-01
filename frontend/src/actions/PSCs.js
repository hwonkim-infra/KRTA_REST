import { PRODUCT_LIST, PRODUCT_DETAILS, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_CREATE_CHANGE } from './types'
import PSCService from '../services/PSCServices';

export const getPSCs = () => async (dispatch) => {
    try {
        const res = await PSCService.getAll();
        dispatch({
            type: PRODUCT_LIST,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getPSC = (id) => async (dispatch) => {
    try {
        const res = await PSCService.get(id);
        
        
        dispatch({
            type: PRODUCT_DETAILS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}


export const createPSC = (data) => async (dispatch) => {
    try {
        const res = await PSCService.create(data);
        dispatch({
            type: PRODUCT_CREATE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updatePSC = (id, data) => async (dispatch) => {
    try {
        const res = await PSCService.update(id, data);
        // console.log("🚀 ~ file: PSCs.js ~ line 32 ~ updatePSC ~ data", data)
        
        dispatch({
            type: PRODUCT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}


export const deletePSC = (id) => async (dispatch) => {
    try {
        await PSCService.remove(id);
        dispatch({
            type: PRODUCT_DELETE,
            payload: {id},
        })
    } catch (err) {
        console.log(err);
    }
}