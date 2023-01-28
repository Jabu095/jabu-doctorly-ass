
import { takeLatest } from 'redux-saga/effects';
import { exampleRequest } from './action';


function* homeFunc(){
    // try{
    //     const { data } = yield call(() => post('api/example/',action.payload));
    //     yield put(requestLoginSuccess(data as LoginResponseView));
        
    // }catch (err) {
    //     systemError(err);
    //     yield put(requestLoginFailed(err));
    // }
}

export function* homeWatchSaga(){
    yield takeLatest(exampleRequest,homeFunc);
}
