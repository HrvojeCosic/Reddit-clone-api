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

exports.getAllSubreddits = function (req, res, next) {
	communityName = [];
	Subreddit.find({}).then(communities => {
		communities.forEach(community => {
			communityName.push(community.name);
		});
		res.status(200).json(communityName);
	});
};

exports.getSubreddit = function (req, res, next) {
	Subreddit.findOne({ name: req.params.subreddit }, (err, subInfo) => {
		if (err) {
			res
				.status(500)
				.json({ title: 'error', error: 'Failed to find subreddit.' });
		}
		res.status(200).json(subInfo);
	}).populate({
		path: 'posts',
		populate: { path: 'author', select: 'username' },
	});
};
