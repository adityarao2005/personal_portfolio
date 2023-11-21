// Import statements
import createRestRouter from "./routes-helpers.js";
import express from 'express'
import { defaultAuthenthication }  from "../middleware/middleware.js"


// Current collections: art-links, messages, projects
// Create a rest api
// Sample CRUD based REST API
const router = express.Router();
// Create the rest router
createRestRouter(router, "art-links", defaultAuthenthication);

// Export router
export default router;
