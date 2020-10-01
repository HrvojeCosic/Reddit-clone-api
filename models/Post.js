const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	subbreddit: { type: String, required: true },
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	timestamp: { type: String, required: true },
	title: { type: String, required: true },
	comments: { type: Schema.Types.ObjectId, ref: 'Comment' },
});

module.exports = mongoose.model('Post', postSchema);