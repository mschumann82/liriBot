# liriBot

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says

Technologies used:

Node.js
Javascript
npm packages: require, twitter, node-spotify-api, dotenv

How to Run

1: node liri.js my-tweets This will show your last 20 tweets and when they were created at in your terminal/bash window.

2: node liri.js spotify-this-song "song name" (must be in quotes if song name is more than one word) This will show the following information about the song in your terminal/bash window * Artist(s) * The song's name * A preview link of the song from Spotify * The album that the song is from

if no song is provided then the program will default to
"Neverender" by Coheed and Cambria

3: node liri.js movie-this "movie name" (must be in quotes if song name is more than one word)

This will output the following information to your terminal/bash window:

Title.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4: node liri.js do-what-it-says

This will output the command placed in random.txt file

Author - Michael Schumann

This project is licensed under the MIT License.

