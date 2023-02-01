const fs = require("fs");
const path = "./text.txt";
if (fs.existsSync(path)) {
  console.log("File is Exists");
} else {
  console.log("File Dosen't Exist");
}
