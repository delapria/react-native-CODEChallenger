import { createAction, handleActions } from 'redux-actions';

//ACTIONS

const POSTS_ADD_ACTION = 'POSTS/ADD';
const POSTS_CLEAR_ACTION = 'POSTS/CLEAR';
const POSTS_REMOVE_ACTION = 'POSTS/REMOVE';

const addPost = createAction(POSTS_ADD_ACTION, description => ({
  description,
}));
const removePost = createAction(POSTS_REMOVE_ACTION);
const clearPosts = createAction(POSTS_CLEAR_ACTION);

export const actions = {
  addPost,
  removePost,
  clearPosts,
};

//REDUCERS

const INITIAL_STATE = [];

const postsHandler = handleActions(
  {
    [POSTS_ADD_ACTION]: (state, action) => [...state, action.payload],
    [POSTS_REMOVE_ACTION]: (state, action) => {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    },
    [POSTS_CLEAR_ACTION]: () => INITIAL_STATE,
  },
  INITIAL_STATE,
);

export const reducers = {
  posts: postsHandler,
};
