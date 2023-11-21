import db from "../db/conn.js";
import { ObjectId } from "mongodb";

// Default middleware function
const DefaultMiddleWare = (req, res, next) => { next(); };

// Set get method
function setGetMethod(router, collectionName) {
	// Set the get
	router.get("/", async (req, res) => {
		// Access the collection
		let collection = await db.collection(collectionName);
		// Get the query params from the req
		let limit = req.query.limit;
		let skip = req.query.skip;

		// Find all the results from the collection
		// turn it into an array and return
		let stream = collection.find({});

		if (limit)
			stream = stream.limit(limit);

		if (skip)
			stream = stream.skip(skip)

		// Get the results
		let results = await stream.toArray();
		// Log results
		console.log("Got the results successfully: " + results);

		// Return the results and send 200 status
		res.send(results).status(200);
	});
}

// Set get id method
function setGetIDMethod(router, collectionName) {
	// Get a single document based on ID
	router.get("/:id", async (req, res) => {
		// Access the colllection
		let collection = await db.collection(collectionName);
		// Create the query for accessing the object based on paramter
		let query = { _id: new ObjectId(req.params.id) };
		// Find the first result from the collection absed on the query
		let result = await collection.findOne(query);
		// Log results
		console.log("Got the results successfully: " + results);
		// If the result exists then return it with 200
		// else return 404
		if (!result) res.send("Not found").status(404);
		else res.send(result).status(200);
	});
}

// Set post method
function setPostMethod(router, collectionName) {
	// Add a new document to the collection
	router.post("/", async (req, res) => {
		// Get a new collection
		let collection = await db.collection(collectionName);
		// Get the document
		let newDocument = req.body;
		// Get the result
		let result = await collection.insertOne(newDocument);
		// Log results
		console.log("Got the results successfully: " + results);

		// Send the result
		res.send(result).status(204);
	});
}

// Set delete method
function setDeleteMethod(router, collectionName) {
	// Delete an entry at a specific ID
	router.delete("/:id", async (req, res) => {
		// Get the id from the parameter and create hte query
		const query = { _id: new ObjectId(req.params.id) };
		// Get the collection
		const collection = db.collection(collectionName);
		// Get the result and send the result status
		let result = await collection.deleteOne(query);

		// Log results
		console.log("Got the results successfully: " + results);

		// Send the result
		res.send(result).status(200);
	});

}

// Set put method
function setPutMethod(router, collectionName) {
	// Update or patch the project
	router.put("/:id", async (req, res) => {
		// Create the query based on the id to patch
		const query = { _id: new ObjectId(req.params.id) };

		// Access the collection
		let collection = await db.collection(collectionName);
		// Update the result
		// Later perform check over here
		let result = await collection.updateOne(query, req.body);
		// Log results
		console.log("Got the results successfully: " + results);
		// Send the result
		res.send(result).status(200);
	});
}


// Function to apply rest properties onto it
function createRestRouter(router, collectionName, middleware = DefaultMiddleWare) {

	// Add middleware layer
	router.use(middleware);
	console.log("Added middleware successfully");

	// Get method
	setGetMethod(router, collectionName);
	console.log("Added get method successfully");

	// Get ID method
	setGetIDMethod(router, collectionName);
	console.log("Added get id method successfully");

	// Post method
	setPostMethod(router, collectionName);
	console.log("Added post method successfully");

	// Delete method
	setDeleteMethod(router, collectionName);
	console.log("Added delete method successfully");

	// Put method
	setPutMethod(router, collectionName);
	console.log("Added put method successfully");

}

// Export the function
export default createRestRouter;