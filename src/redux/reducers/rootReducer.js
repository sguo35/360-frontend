import {combineReducers} from 'redux';
import { paneReducer } from './paneReducer';

import { infoReducer } from './infoReducer';
import { accountReducer } from './accountReducer';

export const rootReducer = combineReducers({
    info: infoReducer,
    pane: paneReducer,
    account: accountReducer
});
