var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"..","public", "home.html"));
      //res.sendFile(path.join(__dirname/.., "home.html"));
  });

  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname,"..","public", "survey.html"));
  });

}