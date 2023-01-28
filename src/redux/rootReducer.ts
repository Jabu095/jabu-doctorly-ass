import { combineReducers } from 'redux';
import { TAppState } from '../types';
import { homeReducer } from './home/reducer';


const rootReducer = combineReducers<TAppState>({
    home: homeReducer,
});

export default rootReducer;

