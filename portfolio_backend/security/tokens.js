// Import jwt as jsonwebtoken

module.exports.checkIfAdminToken = function (token) {
	return token == process.env.ADMIN_TOKEN_SECRET;
}

