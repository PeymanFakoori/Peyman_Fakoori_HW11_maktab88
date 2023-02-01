const fs = require("fs");

fs.unlink("./third-text.txt", function (error) {
  if (error) console.log("There was an error");
  else console.log("Successfully Detected");
});

// fs.writeFile(
//   "./third-text.txt",
//   "This is an exercise to delet a file via node js",
//   function (error) {
//     if (error) console.log("ERROR!", error);
//     else console.log("done");
//   }
// );
