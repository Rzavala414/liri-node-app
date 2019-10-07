# LIRI Bot

### What is LIRI Bot
-Liri Bot is a CLI application that displays either movie or song info based on the title you give the program. 

### So Why LIRI Bot?
-The purpose of LIRI Bot's creation is to display song or movie data to the user and demonstrate how to make api calls without the need of ajax.

### Installation Guide AND User Operation
1. You'll first need to download the dependencies required for this program by opening the terminal add typing out this command: `npm install`

2. Next you'll either need to create a new account or you can use your existing account to sign up and get your api keys here [https://developer.spotify.com/]. After you've acquired your api keys from Spotify copy the following code bellow into a new `.env` file, replacing the values with your API keys (no quotes) once you have them:


```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
3. Open a new terminal and navigate to the `liri.js` file. Run this command: `node liri.js spotify-that` and put whatever song you want after to get information returned to you about it. By default if no input is made for a song you'll be returned info about the song "Sign of The Times" by Harry Styles. Alternatively if you run the command: `node liri.js movie-this` and then your movie you'll get a callback with info about that movie. There is no defalult return if the movie field is left empty. Lastly if you run the command: `node liri.js do-what-it-says` you'll get a call back for information on the Back Street Boy's song "I Want It That Way." Refer to the images bellow as a guidance for how each command and call back should look like.

<!-- add demo images here -->



<!-- add demo images here -->

### Technologies Used In Creating This Application
    *Node.js
    *Spotify API
    *Axios npm package
    *node-spotify-api npm package
    *OMBD API
    *fs Package
    *momentum npm package
    *dotenv npm package

### Who Maintains And Contributes To The Project

The maintenance and development of this project is held solely responsible by "Rogelio Zavala"