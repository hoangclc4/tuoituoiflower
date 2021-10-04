const BASE_URL = null;
const PROTOCOL = null;
const FE_PORT = null;
const BE_PORT = null;
const FULL_BASE_BE_URL = PROTOCOL + BASE_URL + BE_PORT;
const FULL_BASE_FE_URL = PROTOCOL + BASE_URL + FE_PORT;
const BASE_BE_URL = BASE_URL + BE_PORT;

const DB_URL = `mongodb+srv://root:hoatuoiT4s@tuoituoiflowercluster.mbqhk.mongodb.net/shop?retryWrites=true&w=majority`;

module.exports = {
	BASE_BE_URL,
	PROTOCOL,
	FULL_BASE_BE_URL,
	FULL_BASE_FE_URL,
	DB_URL
};
