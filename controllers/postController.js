const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

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
			})
			.catch(err => {
				res
					.status(500)
					.json({ title: error, error: 'Post not saved to the DB' });
				console.log(err);
			});
	});
};

//CREATE COMMENT
exports.createNewComment = function (req, res, next) {
	const postId = req.params.id;
	const { author, timestamp, comment } = req.body;

	//FIND COMMENT'S AUTHOR BY EMAIL
	User.findOne({ email: author }, (err, author) => {
		if (err) {
			console.log(err);
		}
		//CREATE NEW COMMENT (USING FOUND AUTHOR)
		newComment = new Comment({
			author: author.username,
			content: comment,
			timestamp,
			post: postId,
		});
		newComment
			.save()
			.then(comment => {
				res.status(200).json({ comment });
			})
			.catch(err => {
				res
					.status(500)
					.json({ title: error, error: 'User not saved to the DB' });
				console.log(err);
			});
	});
	res.status(200);
};

exports.getComments = function (req, res, next) {
	Comment.find({ post: req.params.id }, (err, comments) => {
		if (err) {
			console.log(err);
			res.status(500).json({ title: 'error', error: "Couldn't load posts..." });
		}
		res.status(200).json({ comments });
	});
};
