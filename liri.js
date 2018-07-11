require("dotenv").config();
var keys = require("./keys");
var fs = require('fs');
var Twitter = require('twitter');
var request = require("request");
var Spotify = require('node-spotify-api');



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


const commands = process.argv[2];
const search = process.argv[3];
const nodeArgs = process.argv;

switch (commands) {
    case "my-tweets":
      myTweets();    //---- make functions for each command.
      break;
    
    case "spotify-this-song":
      mySpotify();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      //();
      break;
    }

    function myTweets() {
               
          var params = {screen_name: 'Mike82163194'};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              console.log(tweets);
              
              for (let i = 0; i < tweets.length; i++) {
                  console.log(tweets[i].created_at);
                  console.log(tweets[i].text)
              }
            }
            else {
                console.log(error);
            }
          });
    }

    function mySpotify() {
        spotify.search({ type: 'track', query: search }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
            
                console.log(data.tracks.items[0].artists[0].name);
                console.log(data.tracks.items[0].name);
                console.log(data.tracks.items[0].album.name);
                console.log(data.tracks.items[0].preview_url);
            
            
           
        });
    }

    function movie() {
    //   let movieName = "";
    //   for (var i = 2; i < nodeArgs.length; i++) {
    //     if (i > 2 && i < nodeArgs.length) {
    //     movieName = movieName + "+" + nodeArgs[i];
    //     }
    //     else {
    //         movieName += nodeArgs[i];
    //     }
    // }
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    

    request (queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          
          console.log(JSON.parse(body).Title);
          console.log(JSON.parse(body).Year);
          console.log(JSON.parse(body).imdbRating);
          console.log(JSON.parse(body).Ratings[0]);
          console.log(JSON.parse(body).Country);
          console.log(JSON.parse(body).Language);
          console.log(JSON.parse(body).Plot);
          console.log(JSON.parse(body).Actors);
      }
    })
    }
