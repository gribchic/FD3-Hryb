import { GOODS_ADD, GOODS_LOADING } from "./types";

export const fetchGoods = () => (dispatch) => {
    dispatch(goodsLoading());
    setTimeout(() => {
        dispatch({ type: GOODS_ADD, payload: [{id:1, name: 'test'}] });
    }, 0);
};

export const goodsLoading = () => {
    return { type: GOODS_LOADING }
}