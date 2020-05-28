import getAPIURL from "./getAPIURL";
import axios from "axios";

export default async function postToFunctions(functionName, parameters) {
	const URL = `${getAPIURL()}/${functionName}`;
	const HEADER = {
		headers: {
			"Cache-Control": "no-cache",
			"Content-Type": "application/json",
		},
	};
	return await axios.post(URL, parameters, HEADER);
}
