// Google Apps Script - Deploy as Web App
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Paste this code into Code.gs
// 4. Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the deployment URL into config.js

// Rate limit: track last submission time per session ID
var RATE_LIMIT_SECONDS = 10;

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var degenerate = parseFloat(data.degenerate);
    var yakkai = parseFloat(data.yakkai);
    var nickname = String(data.nickname || "").trim().substring(0, 30);
    var sessionId = String(data.sessionId || "").substring(0, 100);

    // Validate scores are in range
    if (isNaN(degenerate) || isNaN(yakkai) || degenerate < -10 || degenerate > 10 || yakkai < -10 || yakkai > 10) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid scores." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Sanitize nickname - remove anything that's not alphanumeric, spaces, or basic punctuation
    nickname = nickname.replace(/[^\w\s\-_.!?]/g, "");

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Rate limiting by session ID
    if (sessionId) {
      var lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        var sessionCol = 5; // Column E = sessionId
        var timestampCol = 1; // Column A = timestamp
        // Check last 20 rows for same session ID
        var startRow = Math.max(2, lastRow - 19);
        var numRows = lastRow - startRow + 1;
        var range = sheet.getRange(startRow, 1, numRows, 5).getValues();
        for (var i = range.length - 1; i >= 0; i--) {
          if (range[i][4] === sessionId) {
            var lastTime = new Date(range[i][0]).getTime();
            var now = new Date().getTime();
            if ((now - lastTime) < RATE_LIMIT_SECONDS * 1000) {
              return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Please wait before sharing again." }))
                .setMimeType(ContentService.MimeType.JSON);
            }
            break;
          }
        }
      }
    }

    sheet.appendRow([new Date(), degenerate, yakkai, nickname, sessionId]);

    return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Server error." }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();

    if (lastRow < 2) {
      return ContentService.createTextOutput(JSON.stringify({ results: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = sheet.getRange(2, 2, lastRow - 1, 3).getValues(); // columns B, C, D (degenerate, yakkai, nickname)
    var results = [];

    for (var i = 0; i < data.length; i++) {
      var deg = parseFloat(data[i][0]);
      var yak = parseFloat(data[i][1]);
      if (!isNaN(deg) && !isNaN(yak)) {
        results.push({
          degenerate: deg,
          yakkai: yak,
          nickname: String(data[i][2] || "")
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ results: results }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ results: [], error: "Server error." }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
