import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from 'redux-thunk';

import { goodsReducer } from "./goods";

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store;
};

const rootReducer = combineReducers({
    goods: goodsReducer
})