import { DOCUMENT_LIST, DOCUMENT_DETAILS, DOCUMENT_DELETE, DOCUMENT_CREATE, DOCUMENT_UPDATE, DOCUMENT_CREATE_CHANGE } from './types'
import TCFService from '../services/TCFServices';

export const getTCFs = () => async (dispatch) => {
    try {
        const res = await TCFService.getAll();
        dispatch({
            type: DOCUMENT_LIST,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getTCF = (id) => async (dispatch) => {
    try {
        const res = await TCFService.get(id);
        
        
        dispatch({
            type: DOCUMENT_DETAILS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}


export const createTCF = (data) => async (dispatch) => {
    try {
        const res = await TCFService.create(data);
        dispatch({
            type: DOCUMENT_CREATE,
            payload: res.data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateTCF = (id, data) => async (dispatch) => {
    try {
        const res = await TCFService.update(id, data);
        // console.log("🚀 ~ file: TCFs.js ~ line 32 ~ updateTCF ~ data", data)
        
        dispatch({
            type: DOCUMENT_UPDATE,
            payload: data,
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}


export const deleteTCF = (id) => async (dispatch) => {
    try {
        await TCFService.remove(id);
        dispatch({
            type: DOCUMENT_DELETE,
            payload: {id},
        })
    } catch (err) {
        console.log(err);
    }
}