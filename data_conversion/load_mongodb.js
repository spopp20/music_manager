// Purpose: Load MongoDb Collections from the files in this folder.
// Usage after entry into this folder
//
// Open your mongo command line utillity and connect to your database
// and pass the script into as a command line
//
// example:
// cd config
//
// mongo "mongodb+srv://cluster0.Use-Your-Cluster.mongodb.net/music" -u fakeuser load_mongodb.js

// Delete your instruments collection - then load it with the json file contents
db.instruments.drop();
var file1 = cat('./instruments.json'); // file name
var js1 = JSON.parse(file1); // convert string to JSON
db.instruments.insert(js1); // Load the collection
db.instrument.createIndex({ instrument: 1 });

db.songs.drop();
var file2 = cat('./songs.json'); // file name
var js2 = JSON.parse(file2); // convert string to JSON
db.songs.insert(js2); //collection name
db.songs.createIndex({ song: 1 });

db.scores.drop();
var file3 = cat('./scores.json'); // file name
var js3 = JSON.parse(file3); // convert string to JSON
db.scores.insert(js3); //collection name
db.scores.createIndex({ song: 1, instrument: 1 });
