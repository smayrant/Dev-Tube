import baseAPISearch from "../config/baseAPISearch";

export const getHomePageJSVideos = () => {
	return async dispatch => {
		const response = await baseAPISearch({
			params: {
				q: "javascript",
				maxResults: 10
			}
		});
		dispatch({ type: "GET_VIDEOS", payload: response.data.items });
	};
};
