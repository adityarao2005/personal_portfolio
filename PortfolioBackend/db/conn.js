import { MongoClient } from "mongodb";


const uri = process.env.ATLAS_URI || "";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let conn;
try {
	// Connect the client to the server	(optional starting in v4.7)
	conn = await client.connect();
} catch (e) {
	console.error(e);
}

// Send a ping to confirm a successful connection
let db = conn.db("my-data");

// Export database so we can use it elsewhere
export default db;