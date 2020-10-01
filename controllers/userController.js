const UserModel = require('../models/User');
// const bcrypt = require('bcr')

exports.createNewUser = function (req, res, next) {
	const { username, password, repeatPassword, email, createdAt } = req.body;

	if (password === repeatPassword) {
		const newUser = new UserModel({
			username: username,
			password: password,
			email: email,
			timestamp: createdAt,
		});
		newUser.save(err => {
			if (err) {
				return res.status(400).json({ title: 'error', error: 'Email in use' });
			}
			return res.status(200).json({ title: 'Signed up successfully.' });
		});
	} else {
		res.status(400).json({ title: 'error', error: 'Passwords do not match.' });
	}
};
