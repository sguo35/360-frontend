import {combineReducers} from 'redux';
import { paneReducer } from './paneReducer';

import { infoReducer } from './infoReducer';

export const rootReducer = combineReducers({
    info: infoReducer,
    pane: paneReducer
});
