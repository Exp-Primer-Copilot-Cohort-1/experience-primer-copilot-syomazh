// Create web server
// Start the server
// 1. Load the modules
// 2. Create a web server
// 3. Start the server

// 1. Load the modules
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var path = require('path');

// 2. Create a web server
var server = http.createServer(function (req, res) {
    // 2.1. Get the URL
    var url = req.url;
    console.log(url);

    // 2.2. Check if the URL is the root
    if (url === '/') {
        // 2.2.1. Read the file
        fs.readFile('./public/index.html', function (err, data) {
            // 2.2.2. Write the content of the file to the response
            res.write(data);
            // 2.2.3. End the response
            res.end();
        });
    }
    // 2.3. Check if the URL is /comments
    else if (url === '/comments') {
        // 2.3.1. Check if the request is a POST request
        if (req.method === 'POST') {
            //