import { GOODS_ADD, GOODS_FAILED, GOODS_LOADING } from "./types";

const initState = {
    isLoading: false,
    goods: [],
    error: null,
};

export const goodsReducer = (state = initState, action) => {
    switch (action.type) {
        case GOODS_LOADING:
            return { ...state, isLoading: true, error: null };
        case GOODS_FAILED:
            return { ...state, isLoading: false, error: action.payload };
        case GOODS_ADD:
            return { ...state, isLoading: false, goods: action.payload, error: null }
        default: return state;
    }
};