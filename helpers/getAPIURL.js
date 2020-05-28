export default function getAPIURL() {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		return "http://192.168.5.33:5000/resenha-auth-db-storage/us-central1";
	} else {
		return "https://us-central1-resenha-auth-db-storage.cloudfunctions.net";
	}
}
