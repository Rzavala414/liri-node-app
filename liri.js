require("dotenv").config();
var keys = require("./keys.js");
// console.log(keys)

var Spotify = require('node-spotify-api');
var command = process.argv[2];

    if(command === "spotify-that"){
        
var spotify = new Spotify(keys.spotify);
    var songName = process.argv.slice(3).join(" ");
    console.log(songName);
    if(!songName){
      songName = "The Sign"
    }

spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    //grabs band
    console.log("Band Name: " + data.tracks.items[0].artists[0].name);
    //Grabs song name
    console.log("Song Name: " + data.tracks.items[0].name);
    //grabs external link
    console.log("Link: " + data.tracks.items[0].external_urls.spotify);
    // grabs album name
    console.log("Album: " + data.tracks.items[0].album.name);
})
    };