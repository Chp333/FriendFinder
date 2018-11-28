// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsJson = require("../app/data/friends");
console.log("inital load", friendsJson);



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    return res.json(friendsJson);
  });

  
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    

console.log("friends post hit");
//console.log(req.body);
friendsJson.push(req.body);
console.log(friendsJson);



  for (var i=0; i < friendsJson.length; i++) {


friendsJson[i].scores


  }


  });


  
  
 };
