export default (state = [], action) => {
	switch (action.type) {
		case "GET_JS_HOMEPAGE_VIDEOS":
			return action.payload;
		default:
			return state;
	}
};
