var express = require("express");
var path = require("path");

var app = express();

const dir = "charts/Simple-Charts"

app.use(express.static("Simple-Charts"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, dir, "index.html"));
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
    console.log("App path files: " + path.resolve(__dirname, dir, "index.html"));
})