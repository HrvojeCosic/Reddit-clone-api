const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subredditSchema = new Schema({
	name: { type: String, required: true },
	timestamp: { type: String, required: true },
	description: { type: String, required: true },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model('Subreddit', subredditSchema);
