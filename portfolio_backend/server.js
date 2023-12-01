// Imports
require("./loadEnvironment.js");
require("./db/conn.js")
const express = require("express");
const cors = require("cors");
const projects = require("./routes/projects.js");
const art_links = require("./routes/art_links.js");
const messages = require("./routes/messages.js");

// Port of application
const PORT = process.env.PORT || 5050;
const app = express();

// Use CORS and json text
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/projects", projects.default);
app.use("/api/art-links", art_links.default);
app.use("/api/messages", messages.default);

// Global error handling
app.use((err, _req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Uh oh! An unexpected error occured.");
})

// start the Express server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});