var fs = require('fs');
var formidable = require('formidable');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));
app.set('view engine', 'ejs');

/*
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Forum.html");
});

app.post("/", function(req, res) {
    var titlu1=Text(req.body.nume);
    var autor1=Text(req.body.nume_aut);
    var mesaj1=Text(req.body.postarea);

    res.send(titlu1 + "~ postat de "+autor1+"~");
});*/


app.post('/saveform', function(req, res) {
    var form = new formidable.IncomingForm();
    var date = fs.readFileSync("postari_noi.json");
    x = JSON.parse(date);

    form.parse(req, function(err, fields) {
        var formular = { titlu: fields.nume, autor: fields.nume_aut, text: fields.postarea };
        x.push(formular);
        fs.writeFileSync("postari_noi.json", JSON.stringify(x));

        res.send("Am adaugat mesajul tau minunat, draga " + fields.nume);
    });

});

app.get("/comenzi", function(req, res) {

    //citire din postri.json
    var date = fs.readFileSync("/postari_noi.json");
    x = JSON.parse(date);
    console.log(x);
    res.render("postari_noi", {new_post: x});

});