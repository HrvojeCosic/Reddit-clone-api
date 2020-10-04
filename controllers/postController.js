const Post = require('../models/Post');
const User = require('../models/User');
const { all } = require('../routes/posts');

exports.createNewPost = async function (req, res, next) {
	const { community, title, text, timestamp, author } = req.body;
	let user_id = '';

	const queryAuthor = await User.findOne(
		{ email: author },
		(err, authorFound) => {
			if (err) {
				return console.log(err);
			}
			user_id = authorFound;
		}
	);

	const newPost = new Post({
		subreddit: community,
		author: user_id,
		timestamp,
		title,
		text,
		// comments: '', >>>>not created yet
	});
	newPost.save().then(post => {
		newPost
			.populate('author', 'username')
			.execPopulate()
			.then(populatedAuthor => {
				res
					.status(200)
					.json({ populatedAuthor, title: 'Post created successfully' });
			});
	});
};
