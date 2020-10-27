const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

exports.createNewComment = function (req, res, next) {
	const postId = req.params.id;
	const { author, timestamp, comment } = req.body;

	User.findOne({ email: author }, (err, author) => {
		if (err) {
			console.log(err);
		}
		newComment = new Comment({
			author: author._id,
			content: comment,
			timestamp,
			post: postId,
		});
		newComment
			.save()
			.then(comment => {
				comment.populate('author', 'username', () => {
					//PUSH COMMENT TO Post COLLECTION COMMENT PROPERTY ARRAY
					Post.updateOne(
						{ _id: postId },
						{ $push: { comments: comment } },
						(err, result) => {
							if (err) console.log(err);
							return result;
						}
					);
					res.status(200).json({ comment });
				});
			})
			.catch(err => {
				res
					.status(500)
					.json({ title: 'error', error: 'User not saved to the DB' });
				console.log(err);
			});
	});
};

exports.voteComment = function (req, res) {
	if (req.body.action === 'upvote') {
		const comment_id = req.params.id;
		Comment.findOneAndUpdate(
			{ _id: comment_id },
			{ $inc: { upvotes: 1 } },
			{ returnOriginal: false }
		)
			.then(updatedComment => {
				res
					.status(200)
					.json({ title: 'Post succesffully upvoted', updatedComment });
			})
			.catch(err => {
				res.status(500).json({ title: 'error', error: err });
			});
	} else if (req.body.action === 'downvote') {
		const comment_id = req.params.id;
		Comment.findOneAndUpdate(
			{ _id: comment_id },
			{ $inc: { upvotes: -1 } },
			{ returnOriginal: false }
		)
			.then(updatedComment => {
				res
					.status(200)
					.json({ title: 'Post succesffully downvoted', updatedComment });
			})
			.catch(err => {
				res.status(500).json({ title: 'error', error: err });
			});
	}
};
