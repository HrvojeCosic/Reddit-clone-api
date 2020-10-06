const Post = require('../models/Post');
const User = require('../models/User');

//GET ALL POSTS
exports.getAllPosts = async function (req, res, next) {
	const allPosts = await Post.find({}, (err, posts) => {
		if (err) {
			return console.log(err);
		}

		res.status(200).json({ posts, title: 'Posts successfully fetched' });
	}).populate('author');
};

exports.createNewPost = async function (req, res, next) {
	const { community, title, text, timestamp, author, upvotes } = req.body;
	let user_id = '';

	//FIND AUTHOR OF THE POST IN DB
	const queryAuthor = await User.findOne(
		{ email: author },
		(err, authorFound) => {
			if (err) {
				return console.log(err);
			}
			user_id = authorFound;
		}
	);

	//CREATE POST & SAVE IT IN DB
	const newPost = new Post({
		subreddit: community,
		author: user_id,
		timestamp,
		title,
		text,
		upvotes,
		// comments: '', >>>>not created yet
	});
	newPost.save().then(post => {
		//POPULATE AUTHOR PROPERTY WITH THE AUTHOR'S USERNAME AND SEND IT TO FRONTEND
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
