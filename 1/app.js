let fs = require("fs");
fs.appendFile("./text.txt", "   ==>  appended via app.js", function (error) {
  if (error) console.log("ERROR!", error);
  else console.log("done");
});
