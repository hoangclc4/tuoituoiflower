const BASE_URL = `localhost`;
const PROTOCOL = `http://`;
const FE_PORT = `:3000`;
const BE_PORT = `:3001`;
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
