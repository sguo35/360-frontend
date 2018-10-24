import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  blacklist: ['pane']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, {
  pane: {
    addPrompt: () => { },
    studentIndex: 0,
    prompts: [],
    deletePrompt: () => {},
    questionIndex: 0
  },
  account: {

  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store)