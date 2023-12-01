const mongoose = require("mongoose");

const uri = process.env.ATLAS_URI || "";
const uriOffline = process.env.OFFLINE_URI || "";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri).catch(function (err) {
	console.log("Could not connect to internet.. connecting to local network instead");
	mongoose.connect(uriOffline).catch(err => console.log("Something terrible went wrong."));
});




