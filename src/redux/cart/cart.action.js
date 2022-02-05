import cartActionTypes from "./cart.types";

export const addToBasket = item => {
    return dispatch => dispatch({
        type: cartActionTypes.ADD_TO_BASKET,
        payload: item
    })
}
export const removeItem = item => {
    return {
        type: cartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = item => {
    return {
        type: cartActionTypes.CLEAR_ITEM_FROM_BASKET,
        payload: item
    }
}