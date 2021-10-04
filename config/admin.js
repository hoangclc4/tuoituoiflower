// config used by dashboard client side only
const { FULL_BASE_BE_URL, BASE_BE_URL } = require('./local-base-url');
const fullBaseUrl = FULL_BASE_BE_URL || `https://shophoatuoituoi.com`;
const apiWebSocketUrl = BASE_BE_URL
	? `ws://${BASE_BE_URL}`
	: `wss://shophoatuoituoi.com`;
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `${fullBaseUrl}/api/v1`,
	apiWebSocketUrl,
	developerMode: false
};
