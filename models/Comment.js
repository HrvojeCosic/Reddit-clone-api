const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	content: { type: String, required: true },
	timestamp: { type: String, required: true },
	post: { type: Schema.Types.ObjectId, ref: 'Post' },
	edited: Boolean,
});

module.exports = mongoose.model('Comment', commentSchema);
