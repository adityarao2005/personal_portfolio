// Imports
require("./loadEnvironment.js");
require("./db/conn.js")
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require('http');
const projects = require("./routes/projects.js");
const art_links = require("./routes/art_links.js");
const messages = require("./routes/messages.js");
const { join } = require("path");
const { checkNotAdmin } = require("./middleware/middleware.js");
// Port of application
const PORT = process.env.PORT || 5050;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	rejectUnauthorized: false, // WARN: please do not do this in productioncors: 
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true
	}

});

// Use CORS and json text
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/projects", projects);
app.use("/api/art-links", art_links);
app.use("/api/messages", messages.router);

// Global error handling
app.use((_req, _res, next) => {
	console.log("Going to request");
	next();
});

app.use((err, _req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Uh oh! An unexpected error occured.");
});

io.use((socket, next) => {

	// Check if we are not the admin
	if (!checkNotAdmin(socket.request)) {
		next();
	} else {
		next(new Error("Unauthorized"));
	}
});

io.on("connect_error", (err) => {
	console.log(`connect_error due to ${err.message}`);
});

// Socket IO for messaging
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	// Add message queue implementation
	messages.onMessage((message) => {
		socket.emit('message', message);
	});

});

// start the Express server
server.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
	console.log("IO Path: ", io.path());
});