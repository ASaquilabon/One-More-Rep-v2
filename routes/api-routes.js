var db = require("../models");
module.exports = function (app) {

app.post("/api/userInputer", function (req, res){
    res.json({});
    console.log(req.body);
});
};
