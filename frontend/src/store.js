import { configureStore } from '@reduxjs/toolkit'   // encapsulates our store creation logic, which can then be located in its own file to ease extensibility.
import { combineReducers } from 'redux'

import { productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productCreateChangeReducer} from './reducers/HEXs'

const reducer = combineReducers({
  productList: productListReducer, 
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCreateChange: productCreateChangeReducer,
})

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store