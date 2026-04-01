/**
 *  With nodemon, when a change is detected, the port automatically restarts
 */

import express from "express";
import data from './data/mock.json' with { type: 'json' }; // Data generated from mockaroo.com

const app = express();

const PORT = 3000;

// GET HTTP Request, request sometimes REQ and response sometimes RES

app.get('/', (request, response) => {
    response.json(data);
}); 

// POST

app.post('/create', (request, response) => {
    response.send('This is a POST request at /create')
});

// PUT

app.put('/edit', (request, response) => {
    response.send('This is a PUT request at /edit')
});

// DELETE

app.delete('/delete', (request, response) => {
    response.send('This is a DELETE request at /delete')
});

/**
 * listen()
 * PORT: port number
 * random function
 */
app.listen(PORT, () => {
    console.log(`The server is running on port:${PORT}`)
    console.log(data);
});

