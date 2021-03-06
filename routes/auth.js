const express = require('express');
const router = express.Router();
const User = require('../models/User');

const { check, validationResult } = require('express-validator');

// @route    POST api/auth/signup
// @desc     Signup User
// @access   Public

router.post('/signup', [
	[
		check('firstName', 'First name is required').not().isEmpty().trim(),
		check('lastName', 'Last name is required').not().isEmpty().trim(),
		check('email', 'Please enter valid email').isEmail(),
		check('password', 'Password must be greater than 6 character').isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { firstName, lastName, email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
			}

			user = new User({
				firstName,
				lastName,
				email,
				password,
			});

			await user.save();

			res.json({ user });
		} catch (err) {
			console.error(err.massage);
			res.status(500).send('Server Error');
		}
	},
]);

module.exports = router;
