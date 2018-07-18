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

//Update this POST request to serve Dialogflow V2 API form to Dialogflow
restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "There was a problem with your 'speech' data, please try again.";
  return res.json({
    responseId: "ea3d77e8-ae27-41a4-9e1d-174bd461b68c",
    session:
      "projects/your-agents-project-id/agent/sessions/88d13aa8-2999-4f71-b233-39cbf3a824a0",
    queryResult: {
      queryText: "user's original query to your agent",
      parameters: {
        param: "param value"
      },
      allRequiredParamsPresent: true,
      fulfillmentText:
        "Text defined in Dialogflow's console for the intent that was matched",
      fulfillmentMessages: [
        {
          text: {
            text: [
              "Text defined in Dialogflow's console for the intent that was matched"
            ]
          }
        }
      ],
      outputContexts: [
        {
          name:
            "projects/your-agents-project-id/agent/sessions/88d13aa8-2999-4f71-b233-39cbf3a824a0/contexts/generic",
          lifespanCount: 5,
          parameters: {
            param: "param value"
          }
        }
      ],
      intent: {
        name:
          "projects/your-agents-project-id/agent/intents/29bcd7f8-f717-4261-a8fd-2d3e451b8af8",
        displayName: "Matched Intent Name"
      },
      intentDetectionConfidence: 1,
      diagnosticInfo: {},
      languageCode: "en"
    },
    originalDetectIntentRequest: {}
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("server up and listening");
});
