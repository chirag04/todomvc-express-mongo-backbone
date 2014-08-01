var ObjectId = require('mongodb').ObjectID;
var express = require('express');
var router = express.Router();

require('../db.js').init(function(db){

	router.get('/todos', function(req, res) {
	 	db.find().toArray(function(err, results) {
		  	res.json(results);
	  	}); 
	});

	router.post('/todos', function(req, res) {
	  	var data = {
	  		title: req.body.title,
			completed: req.body.completed,
			order: req.body.order
	  	};
	  	db.save(data, function(err, doc) {
	  		res.json(doc);
	  	});
	});

	router.put('/todos/:id', function(req, res) {
	  	var data = {
	  		_id: new ObjectId(req.body._id),
	  		title: req.body.title,
			completed: req.body.completed,
			order: req.body.order
	  	};
	  	db.save(data, function(err, doc) {
	  		res.json(doc);
	  	});
	});

	router.delete('/todos/:id', function(req, res) {
	  	db.remove({_id: new ObjectId(req.params.id)}, function(err) {
	  		res.json({});
	  	});
	});

});

module.exports = router;
