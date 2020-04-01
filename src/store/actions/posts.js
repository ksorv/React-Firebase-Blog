import firebase from "../../Firebase/firebase";

export const PostManager = {
  savePosts: "SAVE_POSTS",
  requestPosts: "REQUEST_POSTS",
  fetchPosts: "FETCH_POSTS",
  updatePost: "UPDATE_POST",
  updatingPost: "UPDATING_POST",
  foundError: "FOUND_ERROR"
};
const savePosts = posts => {
  return {
    type: PostManager.savePosts,
    posts
  };
};

const requestPosts = () => {
  return {
    type: PostManager.requestPosts
  };
};

const fetchPosts = () => {
  return {
    type: PostManager.fetchPosts
  };
};

const updatePost = post => {
  return {
    type: PostManager.updatePost,
    post
  };
};

const updatingPost = () => {
  return {
    type: PostManager.updatingPost
  };
};

const foundError = err => {
  return {
    type: PostManager.foundError,
    err
  };
};

export const postFetcher = () => dispatch => {
  dispatch(requestPosts());
  firebase
    .firestore()
    .collection("posts")
    .where("published", "==", true)
    .get()
    .then(querySnapshot => {
      var posts = {};
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        posts[doc.id] = doc.data();
      });
      dispatch(savePosts(posts));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(foundError(error));
    });
};
