import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START,
})
export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionsStartAsync = () => {
    return dispatch => {

    }
}


