const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	subreddit: { type: String, required: true },
	author: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
	timestamp: { type: String, required: true },
	title: { type: String, required: true },
	text: { type: String, default: '' },
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	upvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
