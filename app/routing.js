module.exports = function(app) {
	app.post('/api/showMessage', function(req, res) {
		console.log('req: ' + req.body.message);
		res.send(req.body.message);
	});
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};