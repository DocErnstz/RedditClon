import {combineReducers} from "redux";
import posts from "./posts";
import auth from "./Auth";
import subs from "./sub";
export default combineReducers({
    posts, auth, subs
});
