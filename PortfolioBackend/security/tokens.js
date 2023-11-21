// Import jwt as jsonwebtoken

function checkIfAdminToken(token) {
	return token == process.env.ADMIN_TOKEN_SECRET;
}

export default checkIfAdminToken;