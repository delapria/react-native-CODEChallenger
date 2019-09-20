import { createStore, combineReducers } from 'redux';
import { reducers as postsReducers } from './posts';

//STORE SETUP

const reducers = combineReducers({
  ...postsReducers,
});

const store = createStore(
  reducers,
  //para rodar ferramentas de debug
  window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
