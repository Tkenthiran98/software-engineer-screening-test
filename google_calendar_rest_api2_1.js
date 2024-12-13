
/*
2.1 REST API Develop a program in JS which returns array of free/busy intervals in a given time period for any shared Google calendar. Input: shared Google calendar ID; time period (starting and ending moments). Output: array of busy intervals. 
Alternatively (if 2.1 is too difficult to develop) provide sequence of REST API calls that can be executed in REST API client (Postman) in order to achieve the same result.

*/

const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
    //My Client ID obtained from Google Developer Console
    "31007035729-ihij20jvhrmiveje2qq1sf4anjh35jts.apps.googleusercontent.com",

    // My Client Secret obtained from Google Developer Console
    "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",
    // Redirect URI registered 
    "http://localhost:3000"
);

oauth2Client.setCredentials({
    access_token: "ya29.a0ARW5m75lozDPIYD9dQsKVCiEqYplGBxBsGraUurYY0Kbsao-z2xL5zqdb61b8jjHYIz88f66qxBdivPk3C69-DjcggAUSpBOxaTVwsn_yxK018wpnlnsBbhmjQPJiRLBui2eX_Eqc8Uas153iOW6BI9LeAUcRbZIuG1f9TfLaCgYKAfwSARESFQHGX2MiYGgtIDyP_YJaJlka_6qFwA0175",
});

async function getBusyIntervals() {
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    try {
        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: "2024-12-13T8:00:00Z",
                timeMax: "2024-12-13T11:59:59Z",
                items: [{ id: "2018a151@gmail.com" }],
            },
        });

        const busyIntervals = response.data.calendars["2018a151@gmail.com"].busy;

        console.log("Array of busy intervals:", busyIntervals);
    } catch (error) {
        console.error("Error fetching busy intervals:", error.message);
    }
}

getBusyIntervals();


/*
API Deatls 
post method :
https://www.googleapis.com/calendar/v3/freeBusy

body : 
{
  "timeMin": "2024-12-01T00:00:00Z",
  "timeMax": "2024-12-31T23:59:59Z",
  "items": [
    { "id": "2018a151@gmail.com" }
  ]
}

reponse :

{
  "kind": "calendar#freeBusy",
  "timeMin": "2024-12-13T00:00:00.000Z",
  "timeMax": "2024-12-13T23:59:59.000Z",
  "calendars": {
    "2018a151@gmail.com": {
      "busy": [
      ]
    }
  }
}


*/