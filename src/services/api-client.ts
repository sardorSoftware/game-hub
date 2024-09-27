import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'afe0770de10b415e935910551de69f08',
	},
})