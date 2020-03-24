exports.isAdmin = (req, res, next) => {
	const isAdmin = req.user && !!req.user.admin

	if (!isAdmin) {
		return res.send('User is not authorized.')
	}
	next()
}

exports.isLoggedIn = (req, res, next) => {
	const loggedIn = !!req.user

	if (!loggedIn) {
		res.send('User is not authenticated.')
	}
	next()
}
