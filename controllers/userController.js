const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createNewUser = function (req, res, next) {
	const { username, password, repeatPassword, email, createdAt } = req.body;

	if (password === repeatPassword && password.length > 5) {
		//CREATE USER
		const newUser = new User({
			username: username,
			password: bcrypt.hashSync(password, 10),
			email: email,
			timestamp: createdAt,
		});
		//STORING USER IN DB
		newUser.save(err => {
			//EMAIL ERROR
			if (err) {
				console.log(err);
				return res.status(400).json({
					title: 'error',
					error:
						'Registration failed. Check username and email fields and try again',
				});
			}
			res.status(200).json({ title: 'Signed up successfully.' });
		});
		//PASSWORDS DON'T MATCH
	} else {
		res.status(400).json({
			title: 'error',
			error:
				'Make sure your password is longer than 5 characters and typed correctly twice.',
		});
	}
};

exports.login = function (req, res, next) {
	const { email, password } = req.body;
	User.find({ email: email }, (err, user) => {
		if (err) console.log(err);
		//USER NOT FOUND
		if (user.length === 0) {
			res
				.status(401)
				.json({ title: 'user not found.', error: "that email doesn't exist." });
			return;
		}

		const correctPassword = bcrypt.compareSync(password, user[0].password);
		//INCCORECT PASSWORD
		if (!correctPassword) {
			res
				.status(401)
				.json({ title: 'login failed.', error: 'inccorect password' });
			return;
		}
		//ALL IS GOOD
		const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
			expiresIn: '7 days',
		});
		res.status(200).json({ title: 'login successful.', token });
	});
};
