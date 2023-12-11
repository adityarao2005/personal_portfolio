// Import statements
const express = require("express");
const rest_route = require("./rest-route");
const { Project } = require("../models/models");
const { defaultAuthenthication } = require("../middleware/middleware");
// Declarations

// Current collections: art-links, messages, projects
// Create a rest api
// Sample CRUD based REST API
const router = express.Router();
router.use("/", defaultAuthenthication);
// Create the rest router
// Set the get
rest_route.applyRESTProperties(router, Project, "/api/projects/")

// Export router
module.exports = router;
