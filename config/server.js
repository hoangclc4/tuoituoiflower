/* eslint-disable no-unused-vars */
// config used by server side only
const {
	FULL_BASE_BE_URL,
	FULL_BASE_FE_URL,
	DB_URL
} = require('./local-base-url');
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'shop';
const dbUser = process.env.DB_USER || '';
const dbPass = process.env.DB_PASS || '';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

// const dbUrl = DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;
const dbUrl =
	DB_URL ||
	`mongodb+srv://root:hoatuoiT4s@tuoituoiflowercluster.mbqhk.mongodb.net/shop?retryWrites=true&w=majority`;
const fullBaseBEUrl = FULL_BASE_BE_URL || `https://shophoatuoituoi.com`;
const fullBaseFEUrl = FULL_BASE_FE_URL || `https://shophoatuoituoi.com`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `${fullBaseBEUrl}/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `${fullBaseBEUrl}/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: fullBaseFEUrl,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 3001,
	storeListenPort: 3000,

	// used by API
	mongodbServerUrl: dbUrl,

	// your shop smtp settings
	smtpServer: {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		user: 'tuoituoiflower@gmail.com',
		pass: 'hoatuoiT4s',
		fromName: 'Shop Hoa Tươi Tươi',
		fromAddress: 'tuoituoiflower@gmail.com'
	},
	// key to sign tokens
	jwtSecretKey: 'hoatuoiT4s',

	// key to sign store cookies
	cookieSecretKey: 'hoatuoiT4s',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'vi',

	// used by API
	orderStartNumber: 1000,

	// cost factor, controls how much time is needed to calculate a single BCrypt hash
	// for production: recommended salRounds > 12
	saltRounds: process.env.SALT_ROUNDS || 12,

	developerMode: false
};
