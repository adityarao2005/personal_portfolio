// // Import statements
// import express from 'express'
// import mongoose, { Model } from "mongoose";
// // Declarations
// const ObjectId = mongoose.Types.ObjectId;

// // Current collections: art-links, messages, MODELs
// // Create a rest api
// // Sample CRUD based REST API
// export default function applyRESTProperties(_router, _MODEL, routeLink) {
//     // Create the rest router
//     // Access the rest router by doing a hack to trick intellisense
//     let router = {
//         data: express.Router()
//     }.data;
//     router = _router;
    

//     // Trick intellisense
//     let MODEL = {
//         data: Model
//     }.data;
//     MODEL = _MODEL;

    
//     // Set the get
//     router.get("/", async (req, res) => {
//         // Get the query params from the req
//         let limit = req.params.limit;
//         let skip = req.params.skip;
//         // Find all the results from the collection
//         // turn it into an array and return
//         let stream = MODEL.find({});

//         // Add limit and skipping params
//         if (limit) stream = stream.limit(limit);

//         if (skip) stream = stream.skip(skip);

//         // Get the results
//         let results = await stream.exec();
//         // Log results
//         console.log("Got the results successfully: " + results);

//         // Return the results and send 200 status
//         res.send(results).status(200);
//     });

//     // Set get id method
//     // Get a single document based on ID
//     router.get("/:id", async (req, res) => {
//         let result = await MODEL.findById(req.params.id);
//         // Log results
//         console.log("Got the results successfully: " + results);
//         // If the result exists then return it with 200
//         // else return 404
//         if (!result)
//             res.send("Not found").status(404);
//         else
//             res.send({ data: result }).status(200);
//     });

//     // Set post method
//     // Add a new document to the collection
//     router.post("/", async (req, res) => {
//         // Get the document
//         let result = await MODEL.create(req.body);

//         console.log("New object created");

//         // Send the result
//         res
//             .send({ data: result })
//             .header("Location", "/" + routeLink + "/" + result._id)
//             .status(201);
//     });

//     // Set delete method
//     // Delete an entry at a specific ID
//     router.delete("/:id", async (req, res) => {
//         // Get the id from the parameter and create hte query
//         // Get the collection
//         let result = await MODEL.deleteOne({ _id: new ObjectId(req.params.id) });
//         // Log results
//         console.log("Got the results successfully: " + result);

//         // Send the result
//         res.sendStatus(204);
//     });

//     // Set put method
//     // Update or patch the MODEL
//     router.put("/:id", async (req, res) => {
//         // Create the query based on the id to patch
//         const query = { _id: new ObjectId(req.params.id) };

//         // Update the result
//         // Later perform check over here
//         let result = await MODEL.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
//         // Log results
//         console.log("Got the results successfully: " + results);
//         // Send the result
//         res.send({ data: result }).status(200);
//     });
// }

