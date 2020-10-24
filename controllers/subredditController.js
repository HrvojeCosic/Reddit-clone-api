const Subreddit = require('../models/Subreddit');

exports.createSubreddit = function (req, res, next) {
	const { communityName, communityDesc, timestamp } = req.body;
	const newSubreddit = new Subreddit({
		name: communityName,
		timestamp,
		description: communityDesc,
		posts: [],
	});
	newSubreddit
		.save()
		.then(post => {
			res.status(200).json(post);
		})
		.catch(() => {
			res.status(500).json({
				title: 'error',
				error: 'Something went wrong with creating the subreddit.',
			});
		});
};
