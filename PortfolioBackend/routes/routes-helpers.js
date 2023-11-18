import db from "../db/conn.js";
import { ObjectId } from "mongodb";

// Function to apply rest properties onto it
function createRestRouter(router, collectionName) {
	// Projects
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

		let results = await stream.toArray();
		// Log the results
		console.log(results);
		// Return the results and send 200 status
		res.send(results).status(200);
	});

	// Get a single project based on ID
	router.get("/:id", async (req, res) => {
		// Access the colllection
		let collection = await db.collection(collectionName);
		// Create the query for accessing the object based on paramter
		let query = { _id: new ObjectId(req.params.id) };
		// Find the first result from the collection absed on the query
		let result = await collection.findOne(query);
		// Log the result
		console.log(result);
		// If the result exists then return it with 200
		// else return 404
		if (!result) res.send("Not found").status(404);
		else res.send(result).status(200);
	});

	// Add a new document to the collection
	router.post("/", async (req, res) => {
		let collection = await db.collection(collectionName);
		let newDocument = req.body;
		let result = await collection.insertOne(newDocument);
		res.send(result).status(204);
	});


	// Delete an entry at a specific ID
	router.delete("/:id", async (req, res) => {
		// Get the id from the parameter and create hte query
		const query = { _id: new ObjectId(req.params.id) };
		// Get the collection
		const collection = db.collection(collectionName);
		// Get the result and send the result status
		let result = await collection.deleteOne(query);
		res.send(result).status(200);
	});

	// Update or patch the project
	router.patch("/:id", async (req, res) => {
		// Create the query based on the id to patch
		const query = { _id: new ObjectId(req.params.id) };
		// Create the request body with the body posted
		// TODO: check this out when we've got internet
		const updates = {
			$push: { comments: req.body }
		};
		// Access the collection
		let collection = await db.collection(collectionName);
		// Update the result
		let result = await collection.updateOne(query, updates);
		res.send(result).status(200);
	});

}

// Export the function
export default createRestRouter;