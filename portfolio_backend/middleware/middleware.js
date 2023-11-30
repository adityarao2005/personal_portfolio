// For projects and art links, only read is available
import { ArtLink, Message } from "../models/models.js";
import checkIfAdminToken from "../security/tokens.js";
import db from "../db/conn.js";
import { projectsDB, art_linksDB, messagesDB } from "../db/OfflineDB.js"

function checkNotAdmin(req) {
	// Get the auth header
	const authHeader = req.headers['authorization'];
	// Check if the auth header exists and if so split and get the second value
	const token = authHeader && authHeader.split(' ')[1];

	console.log("Auth check:")
	console.log("Token: " + token);
	// if the token is null or the token exists but is invalid, return forbidden error code
	return (token == null || !checkIfAdminToken(token));
}

// Default auth is only read access for clients unless admin
export function defaultAuthenthication(req, res, next) {

	// Check if we are not the admin and that the request is not a get request
	if (req.method != "GET" && checkNotAdmin(req)) {
		return res.send("You do not have permission to access this resource").status(403);
	}

	console.log("Permission granted");

	// Otherwise proceed
	next();
}

// Default auth is only read access for clients unless admin
export function defaultAuthenthication(req, res, next) {

	// Check if we are not the admin and that the request is not a get request
	if (req.method != "GET" && checkNotAdmin(req)) {
		return res.send("You do not have permission to access this resource").status(403);
	}
	console.log("Permission granted");
	
	// Otherwise proceed
	next();
}


// Restricted auth is no access for clients unless admin
export function messagesAuthentication(req, res, next) {

	// Check if we are not the admin
	if (req.method != "POST" && checkNotAdmin(req)) {
		return res.send("You do not have permission to access this resource").status(403);
	}

	console.log("Permission granted");

	// Otherwise proceed
	next();

}

