import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);