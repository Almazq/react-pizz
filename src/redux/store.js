import {createStore, combineReducers} from 'redux';
import ProductsReducer from './productsReducer';

let reducers = combineReducers({
  Products: ProductsReducer,
})

let store = createStore(reducers);
export default store;
