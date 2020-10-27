const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	content: { type: String, required: true },
	timestamp: { type: String, required: true },
	post: { type: Schema.Types.ObjectId, ref: 'Post' },
	edited: { type: Boolean, default: false },
	upvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Comment', commentSchema);
