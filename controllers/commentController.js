const Comment = require('../models/Comment');

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
	}
};
