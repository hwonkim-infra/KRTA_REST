import { PRODUCT_LIST, PRODUCT_DETAILS, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_CREATE_CHANGE } from '../actions/types'

const initialState = [];
export const productListReducer = (WEXs = initialState, action) => {
    const {type, payload} = action;
    if (type === PRODUCT_LIST) return payload;    
    return WEXs;
}

export const productDetailsReducer = (WEX = initialState, action) => {
    const {type, payload} = action;
    if (type === PRODUCT_DETAILS) return payload;    
    return WEX;
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}

export const productCreateChangeReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_CHANGE:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE:
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}


