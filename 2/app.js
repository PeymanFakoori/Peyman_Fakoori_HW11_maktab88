const fs = require("fs");

fs.writeFile("./second-text.txt", "It's Create via Node Js", function (error) {
  if (error) console.log("ERROR!", error);
  else console.log("done");
});
