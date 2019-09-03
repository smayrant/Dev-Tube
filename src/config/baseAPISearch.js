import axios from "axios";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3/search",

	params: {
		part: "snippet",
		maxResults: 4,
		key: process.env.REACT_APP_API_KEY,
		type: "video"
	}
});
