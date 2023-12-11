// Import statements
const express = require("express");
const rest_route = require("./rest-route");
const { Message } = require("../models/models");
const { messagesAuthentication } = require("../middleware/middleware");
// Declarations

queueHandlers = [];

function addEventHandler(handler) {
    queueHandlers.push(handler);
}

function addMessage(message) {
    queueHandlers.forEach(handler => {
        handler(message);
    });
}

setInterval(() => {
    addMessage(new Message({
        name: "Test",
        email: "Test@email.com",
        read: false,
        content: require('crypto').randomBytes(64).toString('hex')
    }));
}, 10000);

// Current collections: art-links, messages, projects
// Create a rest api
// Sample CRUD based REST API
const router = express.Router();
router.use("/", messagesAuthentication);
//
router.use("/", (req, res, next) => {
    let message = new Message(req.body);

    console.log("Message route");
    // addMessage(message);
    console.log("Message route");

    next();
});

// Create the rest router
// Set the get
rest_route.applyRESTProperties(router, Message, "/api/messages/")

// Export router
module.exports.router = router;
module.exports.onMessage = addEventHandler;
