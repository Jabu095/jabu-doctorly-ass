import { all , fork } from 'redux-saga/effects';
import { homeWatchSaga } from './home/saga';

export default function* rootSaga() {
    yield all([
        // Login saga example
        fork(homeWatchSaga),
    ]);
}

