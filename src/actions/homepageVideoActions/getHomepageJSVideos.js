import baseHomepageAPISearch from "../../config/baseHomepageAPISearch";

export const getHomepageJSVideos = () => {
	return async dispatch => {
		try {
			const response = await baseHomepageAPISearch({
				params: {
					q: "javascript"
				}
			});
			dispatch({ type: "GET_JS_HOMEPAGE_VIDEOS", payload: response.data.items });
		} catch (error) {
			console.error(error);
		}
	};
};
