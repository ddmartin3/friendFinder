var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");

var friends = [
    {
        "name": "Andrew",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/06d/116/2d2a2af.jpg",
        "scores":
        [
            1,
            2,
            3,
            4,
            1,
            2,
            3,
            4,
            5,
            1
        ]
    },
    {
        "name": "Andre",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Andr%C3%A9_Ramiro_%28Guadalajara%29_6.jpg/1200px-Andr%C3%A9_Ramiro_%28Guadalajara%29_6.jpg",
        "scores":
        [
            3,
            5,
            2,
            1,
            3,
            2,
            4,
            2,
            1,
            4
        ]
    },
    {
        "name": "Ziggy",
        "photo": "http://midnightraverblog.com/wp-content/uploads/2017/05/Ziggy_original_20297.jpg",
        "scores": [
            1,
            1,
            2,
            1,
            1,
            1,
            2,
            1,
            1,
            2
        ]
    }
  ];

  module.exports = friends;