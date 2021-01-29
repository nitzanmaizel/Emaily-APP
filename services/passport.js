const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GoogleClientID,
			clientSecret: process.env.GoogleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('Access Token', accessToken);
			console.log('Refresh Token', refreshToken);
			console.log('Profile', profile);
			console.log('Done', done);
		}
	)
);
