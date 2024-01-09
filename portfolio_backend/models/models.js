const mongoose = require("mongoose");
// Schema's for the

const projectLocation = new mongoose.Schema({
	type: String,
	location: String,
	role: String,
	url: String
});

const projectSchema = new mongoose.Schema({
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

const artLinkSchema = new mongoose.Schema({
	title: String,
	uri: String,
	date: Date,
	type: String
});

const messageSchema = new mongoose.Schema({
	name: String,
	email: String,
	content: String,
	read: Boolean,
	subject: String,
})

const blogSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: Date,
	tags: [String],
	uri: String,
});

module.exports.Project = mongoose.model("Project", projectSchema);
module.exports.ArtLink = mongoose.model("ArtLink", artLinkSchema);
module.exports.Message = mongoose.model("Message", messageSchema);
module.exports.Blog = mongoose.model("Blog", blogSchema);
