export default (state = [], action) => {
	switch (action.type) {
		case "GET_JAVA_HOMEPAGE_VIDEOS":
			return action.payload;
		default:
			return state;
	}
};
