const fs = require("fs");

const userData = JSON.parse(fs.readFileSync("./user-data.json"));
console.log(userData.filter((user) => user.age > 18));

// const userData = JSON.parse(
//   fs.readFileSync("./user-data.json", function (error) {
//     if (error) console.log("ERROR", error);
//     else console.log(userData.filter((user) => user.age > 18));
//   })
// );
