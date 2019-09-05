import baseHomepageAPISearch from "../../config/baseHomepageAPISearch";

export const getHomepageJavaVideos = () => {
	return async dispatch => {
		try {
			const response = await baseHomepageAPISearch({
				params: {
					q: "java"
				}
			});
			dispatch({ type: "GET_JAVA_HOMEPAGE_VIDEOS", payload: response.data.items });
		} catch (error) {
			console.error(error);
		}
	};
};
