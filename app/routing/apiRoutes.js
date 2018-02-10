var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");
var friends = require("./../data/friends.js")


module.exports = function(app) {

    // API GET route 
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    // API POST route
    app.post("/api/friends", function(req, res) {

        //data comes in as a different format thanks to survey.js
        //The constructor reformats it.
        var FriendObject = function(name, photo, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) {
            this.name = name;
            this.photo = photo;
            this.scores = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
        };
          

        //Incoming survey results and compatability test occur here.
        var f = req.body;        
        var newFriend = new FriendObject(f.name, f.photo, f.q1, f.q2, f.q3, f.q4, f.q5, f.q6, f.q7, f.q8, f.q9, f.q10);
        var totaledComparisons=[]; 

        //function to make the score array a single value
        function sumArray(total, num) {
            return total + num;
        };

        //loop through all availiable options
        for (let i = 0; i < friends.length; i++) {
            //place to store comparison results
            var comparison=[];
            //loop through all answers and compare
            for (let j = 0; j < friends[i].scores.length; j++) {
                comparison.push(Math.abs(newFriend.scores[j] - friends[i].scores[j]));
            }
            //friends array update test
            //console.log("comparison array: " +comparison);
            var comparisonSum = comparison.reduce(sumArray);
            //console.log("comparison value: " + comparisonSum);
            totaledComparisons.push(comparisonSum);
        }
        //verifying the reduce worked  
        console.log(totaledComparisons);
        //match is index of the lowest totaled comparison
        matchValue = totaledComparisons.indexOf(Math.min(...totaledComparisons));
        console.log("This is the index of the matched Friend: " + matchValue);

        //Push newFriend after doing comparison, otherwise you'd be a perfect match with yourself...
        friends.push(newFriend);
        //console.log(friends);

        //friends array update test
        res.json(friends[matchValue]);
    });
}