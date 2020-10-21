const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: { type: String, required: true, minlength: 3, maxlength: 20 },
	password: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		validate: [validator.isEmail, 'Invalid email adress'],
	},
	timestamp: { type: String, required: true },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model('User', userSchema);
