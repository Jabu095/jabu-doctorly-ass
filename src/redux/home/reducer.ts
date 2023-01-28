
import { createReducer } from 'redux-act';
import { exampleRequest } from './action';

export type THomeState = {
  loadingCursor: boolean,
}


const defaultState: THomeState = {
    loadingCursor: false
};


export const homeReducer = createReducer<THomeState>({}, defaultState);


homeReducer.on(exampleRequest, (state, payload) => ({
    ...state,
    loadingCursor: payload
}));


