import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'shop'] // only navigation will be persisted
};
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer)