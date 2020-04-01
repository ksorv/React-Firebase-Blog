import { PostManager } from "../actions/";

export default (
  state = {
    isFetchingPosts: false,
    isUpdatingPost: false,
    postError: false,
    hasFetched: false,
    posts: {}
  },
  action
) => {
  switch (action.type) {
    case PostManager.requestPosts:
      return {
        ...state,
        isFetchingPosts: true,
        postError: false
      };
    case PostManager.savePosts:
      return {
        ...state,
        isFetchingPosts: false,
        hasFetched: true,
        postError: false,
        posts: action.posts
      };
    default:
      return state;
  }
};
