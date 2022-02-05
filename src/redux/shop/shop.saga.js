import { call, takeEvery, put } from 'redux-saga/effects'
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import shopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.action'
export function* fetchCollectionsAsync() {
    yield console.log("I AM FIRED");
    try {

        const collectionRef = firestore.collection("collections");
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error?.message))

    }

}

export function* fetchCollectionsStart() {
    yield takeEvery(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}