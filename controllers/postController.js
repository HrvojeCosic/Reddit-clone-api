const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const { post } = require('../routes/posts');
const { deleteOne } = require('../models/Post');

//GET ALL POSTS
exports.getAllPosts = function (req, res, next) {
	Post.find({}, (err, posts) => {
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
		comments: [],
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
				//PUSH COMMENT TO Post COLLECTION COMMENT ARRAY PROPERTY
				Post.updateOne(
					{ _id: postId },
					{ $push: { comments: comment } },
					(err, result) => {
						if (err) console.log(err);
						return result;
					}
				);
				res.status(200).json({ comment });
			})
			.catch(err => {
				res
					.status(500)
					.json({ title: 'error', error: 'User not saved to the DB' });
				console.log(err);
			});
	});
};

//GET ONE POST
exports.getPost = function (req, res, next) {
	Post.findOne({ _id: req.params.id }, (err, post) => {
		if (err) {
			console.log(err);
			res.status(500).json({ title: 'error', error: "Couldn't load posts..." });
		}
		res.status(200).json({ post });
	})
		.populate('comments')
		.populate('author', 'username')
		.exec();
};

//SEARCH FOR A CERTAIN POST'S TITLE
exports.getPostTitle = function (req, res, next) {
	const searchTitle = req.params.value;
	Post.find({ title: { $regex: `.*${searchTitle}.*` } }, err => {
		if (err) return;
	})
		//IF THERE IS NO ERROR, POPULATE THE AUTHOR WITH THEIR USERNAME AND SEND TO FRONTEND
		.populate('author', 'username')
		.then(postsFound => {
			res.status(200).json({ msg: 'Post search finished.', postsFound });
		});
};

//UPVOTE/DOWNVOTE A POST
exports.votePost = function (req, res, next) {
	const { post, action } = req.body;

	if (action === 'addVote') {
		Post.findOneAndUpdate({ _id: post }, { $inc: { upvotes: 1 } }, err => {
			if (err) {
				res.status(500).json({ title: 'error', err });
			}
			res.status(200).json({ title: 'Incremented post upvotes by 1' });
		});
	} else if (action === 'subtractVote') {
		Post.findOneAndUpdate({ _id: post }, { $inc: { upvotes: -1 } }, err => {
			if (err) {
				res.status(500).json({ title: 'error', err });
			}
			res.status(200).json({ title: 'Decremented post upvotes by 1' });
		});
	}
};
