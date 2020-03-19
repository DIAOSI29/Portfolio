var express = require("express");

var PORT = process.env.PORT || 1111;
var app = express();

app.use(express.static("static"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("./index.html");
// });

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
