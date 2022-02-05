import { createStore, applyMiddleware } from "redux";
import rootReducer from './root-reducer'
import logger from "redux-logger";
import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import { persistStore } from 'redux-persist'
import { fetchCollectionsStart } from "./shop/shop.saga";
const sagaMiddleWare = createSagaMiddleWare()
const middlewares = [sagaMiddleWare, thunk];
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleWare.run(fetchCollectionsStart)
const persistor = persistStore(store)
export { store, persistor }