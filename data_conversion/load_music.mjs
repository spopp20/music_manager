// Purpose: A more advanced database conversion script to load
// the music database on a MongoDB server or on localhost. 
// The ".mjs" extension of this file is used to let you know
// to redirect this file into a mongo shell session.
//
// Data Source: songs.json, scores.json, instruments.json
//
// 1. Change directory into this config folder
//
// example:
// cd config
//
// 2. Open a mongo shell connected to your database
//
// example:
// mongo "mongodb+srv://localhost/musicdb" -u fakeuser < load_music.mjs
// local example:
// mongo
// > create database music;
// > quit();
// mongo < load_music.mjs;

use music;
print("Running load_music.mjs");

conn = new Mongo();
db = conn.getDB("music");
db.stats();

// Delete your instruments collection - then load it with the json file contents
db.instruments.drop();
var file1 = cat('./instruments.json'); // file name
var js1 = JSON.parse(file1); // convert string to JSON
db.instruments.insert(js1); // Load the collection
db.instrument.createIndex({'instrument': 1});

db.songs.drop();
var file2 = cat('./songs.json'); // file name
var js2 = JSON.parse(file2); // convert string to JSON
db.songs.insert(js2); //collection name
db.songs.createIndex({'song': 1});


db.scores.drop();
var file3 = cat('./scores.json'); // file name
var js3 = JSON.parse(file3); // convert string to JSON
db.scores.insert(js3); //collection name
db.scores.createIndex({'song': 1, 'instrument': 1});
