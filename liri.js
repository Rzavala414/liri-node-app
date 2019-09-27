require("dotenv").config();
var keys = require("./keys.js");
// console.log(keys)

// //////////////////////////// Spotify ////////////////////////////////
function displaySongInfo(songName) {


    var Spotify = require('node-spotify-api');
   

    

        var spotify = new Spotify(keys.spotify);
        console.log(songName);
        if (!songName) {
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
}
//////////////////////////// Spotify //////////////////////////////

////////////////////////////// OMBD ////////////////////////////////
   var axios = require("axios");

function displayMovies(movieTitle){
   axios.get(`http://www.omdbapi.com/?t=${movieTitle}=&plot=short&apikey=trilogy`).then(function(response){

        //Grabs movie title
        console.log("Title: " + response.data.Title);
        // Grabs Release year
        console.log("Release Year: " + response.data.Year);
        // Grabs IMDB Rating
        console.log("IMDB Rating: " + response.data.imdbRating);
        // Grabs Rotten Tomatoes Score
        console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value);
        // Grabs films Location 
        console.log("Country where film was produced: " + response.data.Country);
        // Grabs films Language
        console.log("Language: " + response.data.Language);
        // Grabs Plot
        console.log("Plot: " + response.data.Plot);
        // Grabs Actors
        console.log("Actors: " + response.data.Actors);

   })
};
////////////////////////////// OMBD ////////////////////////////////
function doWhatItSays(){
var fs = require("fs");

fs.readFile("random.txt", "utf-8", function (err, data) {

    var newArray = data.split(",");
    var command = newArray[0];
    var query = newArray[1];
    runProgram(command,query);

})
};

var command = process.argv[2];
var query = process.argv.slice(3).join(" ");
runProgram(command,query);
function runProgram(command, query) {
    console.log(command,query)
    switch (command) {
        case "spotify-that":
            displaySongInfo(query);
        break;
        case "movie-this":
             displayMovies(query);
        break;
        case "do-what-it-says":
            doWhatItSays();
    }

};
