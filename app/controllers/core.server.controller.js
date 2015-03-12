exports.home = function(req, res) {
	res.render('index', {
		user: 'Itelo'
	});
}