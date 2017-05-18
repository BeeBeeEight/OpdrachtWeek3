/**
 * Created by teun9 on 18-5-2017.
 */
var express = require('express');
var app = express();
var mysql = require('./mysql');

app.get('/api/v1/cities', function(req, res){
    mysql.query('SELECT * FROM city', function(err, result) {
        if (err) throw err;
    });
});

app.get('/api/v1/countries', function(req, res){
    mysql.query('SELECT * FROM country', function(err, result) {
        if (err) throw err;
    });
});

app.get('/api/v1/cities/:id', function(req, res){
    var id = req.params.id || '';
    mysql.query('SELECT * FROM city WHERE ID=' + id, function(err, result) {
        if (err) throw err;
    });
});

//app.get('/api/v1/countries/:id', function(req, res){
//    var id = req.params.id || '';
//    mysql.query('SELECT * FROM country WHERE ????')
//})

app.post('/api/v1/cities', function(req, res){
    mysql.query('INSERT INTO city (Name) VALUES("New city")', function(err, result){
        if (err) throw err;
    });
});

app.post('/api/v1/countries', function(req, res){
    mysql.query('INSERT INTO country (Name) VALUES("New country")', function(err, result){
        if (err) throw err;
    });
});

app.put('/api/v1/cities/:id', function(req, res){
    var id = req.params.id || '';
    mysql.query('DELETE ' + id + ' FROM city', function (err, result) {
        if (err) throw err;
    });
}); //??

app.put('/api/v1/countries/:id', function(req, res){
    var id = req.params.id || '';
    mysql.query('DELETE ' + id + ' FROM country', function (err, result) {
        if (err) throw err;
    });
}); //??

app.delete('/api/v1/cities/:id', function(req, res){
    var id = req.params.id || '';
    mysql.query('DELETE ' + id + ' FROM country', function (err, result) {
        if (err) throw err;
        });
});

app.get('/api/v1/search?type=city&countrycode='+id+'&limit=24', function(req, res){
    var id = req.params.id || '';
    mysql.query('SELECT * FROM city WHERE CountryCode=' + id, function(err, result){
        if (err) throw err;
    });
});

app.get('/api/v1/search?type=country&continent='+id+'&limit=24', function(req, res){
    var id = req.params.id || '';
    mysql.query('SELECT * FROM country WHERE Continent=' + id, function(err, result){
        if (err) throw err;
    });
});


app.all('*', function(req, res){
    res.status(400);
    res.json({
        'error' : 'Deze methode is niet beschikbaar'
    });
});

server.listen(3000);