import {combineReducers} from 'redux';
import { paneReducer } from './paneReducer';

export const rootReducer = combineReducers({
    pane: paneReducer
});
