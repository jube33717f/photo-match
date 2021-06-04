import { all } from 'redux-saga/effects';
import photo_sagas from './PhotoModule/saga'
export default function* rootSaga() {
    try {
       
        yield all(photo_sagas);
    } catch (err) {

        console.log('error caught in rootsaga::', err);
    }
}