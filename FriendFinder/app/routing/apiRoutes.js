var friendArray = require("../data/friends.js");

module.exports = function(app) {

//A GET route with the url /api/friends. 
//This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    return res.json(friendArray);
});

// A POST routes /api/friends. This will be used to handle incoming survey results.
// This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {
    var match = {
      name: "",
      photo: "",
      friendDifference: 50
    };

    var newFriend = req.body;
    var userScores = newFriend.scores;
    var totalDifference = 0;

    for (var i = 0; i < friendArray.length; i++) {

      console.log(friendArray[i].name);
      totalDifference = 0;

      // loop through the scores of each friend
      for (var j = 0; j < friendArray[i].scores[j]; j++) {

        // calculate the difference between the scores (totalDifference)
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]));

        // If the sum of differences is less than the differences of the current "best match"
        if (totalDifference < match.friendDifference) {

          // Reset the match to be the new friend.
          match.name = friendArray[i].name;
          match.photo = friendArray[i].photo;
          match.friendDifference = totalDifference;
        }
      }
    }
    friendArray.push(newFriend);
    res.json(match);
});
};