import { combineReducers } from "redux";
import auth from "./auth";
import app from "./app";
import posts from "./posts";

export default combineReducers({ auth, app, posts });
