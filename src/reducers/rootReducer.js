import { combineReducers } from "redux";
import homepageJSReducer from "./homepageVideosReducers/homepageJSReducer";
import homepageJavaReducer from "./homepageVideosReducers/homepageJavaReducer";

const rootReducer = combineReducers({
	jsVideos: homepageJSReducer,
	javaVideos: homepageJavaReducer
});

export default rootReducer;
