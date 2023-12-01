// For projects and art links, only read is available
const express = require("express")
const tokens = require("../security/tokens.js");

function checkNotAdmin(req) {
	// Get the auth header
	const authHeader = req.headers['authorization'];
	// Check if the auth header exists and if so split and get the second value
	const token = authHeader && authHeader.split(' ')[1];

	console.log("Auth check:")
	console.log("Token: " + token);
	// if the token is null or the token exists but is invalid, return forbidden error code
	return (token == null || !tokens.checkIfAdminToken(token));
}

/**
 * Default auth is only read access for clients unless admin
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
module.exports.defaultAuthenthication = function (req, res, next) {
	// Check if we are not the admin and that the request is not a get request
	if (req.method != "GET" && checkNotAdmin(req)) {
		return res.send({ "errorMSG" : "You do not have permission to access this resource" }).status(403);
	}

	console.log("Permission granted");

	// Otherwise proceed
	next();
}


/**
 * Restricted auth is no access for clients unless admin
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
module.exports.messagesAuthentication = function(req, res, next) {
	
	// Check if we are not the admin
	if (req.method != "POST" && checkNotAdmin(req)) {
		return res.send({ "errorMSG" : "You do not have permission to access this resource" }).status(403);
	}

	console.log("Permission granted");

	// Otherwise proceed
	next();

}

