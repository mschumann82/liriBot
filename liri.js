require("dotenv").config();
var keys = require("./keys");
var fs = require('fs');
var Twitter = require('twitter');
require("request");
var Spotify = require('node-spotify-api');



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


const commands = process.argv[2];
const search = process.argv[3];

switch (commands) {
    case "my-tweets":
      myTweets();    //---- make functions for each command.
      break;
    
    case "spotify-this-song":
      mySpotify();
      break;
    
    case "movie-this":
      //();
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
            console.log(data);
         
            // Do something with 'data'
        });
    }
