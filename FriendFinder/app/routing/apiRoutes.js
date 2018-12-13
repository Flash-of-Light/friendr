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
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    console.log(newFriend);
    friendArray.push(newFriend);
  
    // We then display the JSON to the users
    res.json(newFriend);
  });
};