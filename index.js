/**
 *  With nodemon, when a change is detected, the port automatically restarts
 */

import express from "express";
import data from './data/mock.json' with { type: 'json' }; // Data generated from mockaroo.com

const app = express();
const PORT = 3000;

// Using the public folder at the root of the project

app.use(express.static("public"));

// Using the images at the route /images

app.use('/images', express.static('images'))

// GET HTTP Request, request sometimes REQ and response sometimes RES

app.get('/', (request, response) => {
    response.json(data);
}); 

// GET with Routing Parameters

app.get('/class/:id', (request, response) => {
    const studentId = Number(request.params.id);

     // Implicitly returns student if the id returns the requested id matches the one in the array
    const student = data.filter((student) => student.id === studentId);

    response.send(student);
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
    // console.log(data);
});

