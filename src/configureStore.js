import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./store/actions/";
import rootReducer from "./store/reducers";

const composeWithDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDev(applyMiddleware(thunkMiddleware))
  );
  store.dispatch(verifyAuth());
  return store;
}
