// config used by store client side only
const { FULL_BASE_BE_URL } = require('./local-base-url');
const fullBaseUrl = FULL_BASE_BE_URL || `https://shophoatuoituoi.com`;

module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl: `${fullBaseUrl}/ajax`
};
