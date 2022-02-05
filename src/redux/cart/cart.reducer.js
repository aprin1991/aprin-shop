import cartActionTypes from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes?.ADD_TO_BASKET:
            return {
                ...state,
                cartItems: addItemToCart(state?.cartItems, action?.payload)
            };
        case cartActionTypes?.CLEAR_ITEM_FROM_BASKET:
            return {
                ...state,
                cartItems: clearItemFromCart(state?.cartItems, action.payload)
            }

        case cartActionTypes?.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state?.cartItems, action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;