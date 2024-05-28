// create web server
// import express from 'express';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Define a port
const PORT = 3000;

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use express.static
app.use(express.static(path.join(__dirname, 'public')));

// Get request
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Server Error');
        }
        res.send(data);
    });
});

// Post request
app.post('/comments', (res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
                        if (err) {
                            return res.status(500).send('Server Error');
                        }
                    const comments = JSON.parse(data);
                    const newComment = {
                        id: Date.now(),
                    }; // Add a closing curly brace here
    });
}  
