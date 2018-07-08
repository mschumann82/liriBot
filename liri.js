require("dotenv").config();
require("./keys");
const Twitter = require('twitter');

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


const commands = process.argv[2];

switch (commands) {
    case "my-tweets":
      myTweets();    //---- make functions for each command.
      break;
    
    case "spotify-this-song":
      //deposit();
      break;
    
    case "movie-this":
      //withdraw();
      break;
    
    case "do-what-it-says":
      //lotto();
      break;
    }

    function myTweets() {
               
          var params = {screen_name: 'nodejs'};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              console.log(tweets);
            }
            console.log(JSON.stringify(response, null, 2));
          });
    }
