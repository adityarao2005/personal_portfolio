// Import statements
const express = require("express");
const rest_route = require("./rest-route");
const { Message } = require("../models/models");
const { messagesAuthentication } = require("../middleware/middleware");
// Declarations

// Current collections: art-links, messages, projects
// Create a rest api
// Sample CRUD based REST API
const router = express.Router();
router.use("/", messagesAuthentication);
// Create the rest router
// Set the get
rest_route.applyRESTProperties(router, Message, "/api/messages/")

// Export router
module.exports.default = router;
