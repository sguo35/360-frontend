import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, {
  pane: {
    addPrompt: () => { },
    studentIndex: 0,
    prompts: [],
    deletePrompt: () => {}
  },
  account: {
    
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
