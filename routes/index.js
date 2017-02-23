var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var min;
	projects["min"] = false;
  	res.render('index', projects);
};

exports.viewMin = function(req, res) {
	var min;
	projects["min"] = true;
	res.render('index', projects);
}