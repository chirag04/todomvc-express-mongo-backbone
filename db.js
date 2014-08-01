var config = require('./config');
var MongoClient = require('mongodb').MongoClient;

var db_url = 'mongodb://' + config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.database;

module.exports.init = function(callback) {
	MongoClient.connect(db_url, function(err, db) {
		if(err) throw err;
		callback(db.collection('todo_list'));
	});
};