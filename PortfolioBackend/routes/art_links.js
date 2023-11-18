// Import statements
import createRestRouter from "./routes-helpers.js";
import express from 'express'


// Current collections: art-links, messages, projects
// Create a rest api
// Sample CRUD based REST API
const router = express.Router();
createRestRouter(router, "art-links");

// Export router
export default router;
