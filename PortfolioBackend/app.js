// Using strict JS
'use strict';

// Imports
import "./loadEnvironment.js"
import express from "express";
import cors from "cors";
import "express-async-errors";
import projects from "./routes/projects.js";
import art_links from "./routes/art_links.js"
import messages from "./routes/messages.js"

// Port of application
const PORT = process.env.PORT || 5050;
const app = express();

// Use CORS and json text
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static
app.use("/", express.static('public'));
// routes
app.use("/api/projects", projects);
app.use("/api/art-links", art_links);
app.use("/api/messages", messages);

// Global error handling
app.use((err, _req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Uh oh! An unexpected error occured.");
})

// start the Express server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});