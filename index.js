"use strict";
//create server using express
const express = require("express");
const bodyParser = require("body-parser");
const restService = express();
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);
restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.echoText
      : "There was a problem with your 'speech' data, please try again.";
  return res.json({
    fulfillmentText: speech,
    source: "wadsworth"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("server up and listening");
});
