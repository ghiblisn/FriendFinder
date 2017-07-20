// ===============================================================================
// LOAD DATA
// ===============================================================================

 var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    if(friendsData.length>0){
        var bestScore = -1;
        var currentScore = 0;
        var matchedName ="";
        var matchedPhoto ="";
        for(var i=0; i<friendsData.length; i++){
            for(var j=0; j<friendsData[0].scores.length; j++){
                currentScore+= Math.abs(req.body.scores[j]-friendsData[i].scores[j])
            };
            if(currentScore<bestScore || bestScore==-1){
                bestScore = currentScore;
                matchedName = friendsData[i].name;
                friendsData[i].photo;
            };
            currentScore=0;
        }
        res.JSON({
            name: matchedName,
            photo: matchedPhoto
        })
    } else
    {
        res.send({
            name: "Currently no friend available",
            photo: "Currently no photo available"
        })
    };
    friendsData.push(req.body);
  });

};
