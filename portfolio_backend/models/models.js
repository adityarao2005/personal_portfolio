const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const model = mongoose.model;
// Schema's for the types

const projectLocation = new Schema({
	type: String,
	location: String,
	role: String,
	url: String
});

const projectSchema = new Schema({
	title: String,
	detail: String,
	description: String,
	startDate: Date,
	endDate: Date,
	skills: [String],
	where: {
		type: projectLocation,
		default: {}
	}
});

const artLinkSchema = new Schema({
	title: String,
	uri: String,
	date: Date,
	type: String
});

const messageSchema = new Schema({
	name: String,
	email: String,
	content: String,
	read: Boolean
})

const Project = model("Project", projectSchema);
const ArtLink = model("ArtLink", artLinkSchema);
const Message = model("Message", messageSchema);

module.exports = { Project, ArtLink, Message };