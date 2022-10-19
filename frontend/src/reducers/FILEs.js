import { DOCUMENT_LIST, DOCUMENT_DETAILS, DOCUMENT_DELETE, DOCUMENT_CREATE, DOCUMENT_UPDATE, DOCUMENT_CREATE_CHANGE } from '../actions/types'

const initialState = [];
export const documentListReducer = (state=[], action) => {
    const {type, payload} = action;
    switch (type){
        case DOCUMENT_LIST:
            return payload;
        default:
            return state
    }
    /* if (type === DOCUMENT_LIST) return payload;    
    return HEXs; */
}

export const documentDetailsReducer = (HEX = initialState, action) => {
    const {type, payload} = action;
    if (type === DOCUMENT_DETAILS) return payload;    
    return HEX;
}

export const documentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCUMENT_CREATE:
            return {
                ...state,
                document: action.payload,
            }
        default:
            return state
    }
}

export const documentUpdateReducer = (state = { document: {} }, action) => {
    switch (action.type) {
        case DOCUMENT_UPDATE:
            return {
                ...state,
                document: action.payload,
            }
        default:
            return state
    }
}

export const documentCreateChangeReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCUMENT_CREATE_CHANGE:
            return {
                ...state,
                document: action.payload,
            }
        default:
            return state
    }
}

export const documentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCUMENT_DELETE:
            return {
                ...state,
                document: action.payload,
            }
        default:
            return state
    }
}


