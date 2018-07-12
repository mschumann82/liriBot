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
//const nodeArgs = process.argv;

function doStuff(commands, search) { //functions takes in arguments
  
switch (commands) {
    case "my-tweets":
      myTweets();    
      break;
    
    case "spotify-this-song":
      if (search === undefined) {
        search = "Neverender"; // instead of ace of base.
      }
      mySpotify(search);
      break;
    
    case "movie-this":
    if (search === undefined) {
      search = "Mr. Nobody"; 
    }
      movie();
      break;
    
    case "do-what-it-says":
      doWhat();
      break;
    }

    fs.appendFile("log.txt", ", -" + commands, function(error, data) {
      // appends commands to log.txt
    });
    

    function myTweets() { // function displays last 20 tweets
               
          var params = {screen_name: 'Mike82163194', count: 20};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              //console.log(tweets); dont need to see whole object anymore.
              
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

    function mySpotify() { //function searches for track
        
      
        spotify.search({ type: 'track', query: search }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
            
                console.log(data.tracks.items[0].artists[0].name);
                console.log(data.tracks.items[0].name);
                console.log(data.tracks.items[0].preview_url);
                console.log(data.tracks.items[0].album.name);
            
        });
    }

    function movie() { // function searches for movie.
    
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&tomatoes=true&r=json&apikey=trilogy";

    

    request (queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          
          console.log(JSON.parse(body).Title);
          console.log(JSON.parse(body).Year);
          console.log(JSON.parse(body).imdbRating);
          console.log(JSON.parse(body).tomatoMeter);
          console.log(JSON.parse(body).Country);
          console.log(JSON.parse(body).Language);
          console.log(JSON.parse(body).Plot);
          console.log(JSON.parse(body).Actors);
          
      }
    })
    }

    function doWhat() {
      fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        };
      
        var dataArr = data.split(",");
      
        doStuff(dataArr[0], dataArr[1]); // passes in text from random as parameters.
      });
    }

  }// end of doStuff.

  doStuff(commands, search); // calling functions allows for the parameters to be taken in.

  
