var connection = require("../config/connection.js");

module.exports = function(app) {
    app.get("/api/all", function(req,res) {
        var dbQuery = "SELECT * FROM udders";

        connection.query(dbQuery, function(err, result) {
            if (err) throw (err);
            res.json(result);
        });
    });

    app.post("/api/new", function(req,res) {
        console.log("Udder Data:");
        console.log(req.body);

        var dbQuery = "INSERT INTO udders (author, body, created_at) VALUES (?,?,?)";

        connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
            if (err) throw (err);
            console.log("Udder Successfully Saved!");
            res.end();
        });
    });
};