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

const postsHandler = handleActions(
  {
    [POSTS_ADD_ACTION]: (state, action) => {
      return [...state, action.payload];
    },
    [POSTS_CLEAR_ACTION]: () => {
      return [];
    },
    [POSTS_REMOVE_ACTION]: (state, action) => {
      return state.filter((post, index) => index !== action.payload);
    },
  },
  [],
);

export const reducers = {
  posts: postsHandler,
};
