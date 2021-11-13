const express = require ('express');

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

// Require routes here once finished

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});