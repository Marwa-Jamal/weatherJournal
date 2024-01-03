/* Empty JS object to act as endpoint for all routes */
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 8000;

// TODO-Spin up the server

const server = app.listen(port, listening);

function listening(){
    console.log(`running on localhost:${port}`);
};

/*app.get('/', function (req, res) {
    res.send('projectData');
});*/


const data = []
app.post('/addMovie', addMovie )
 
function addMovie (req, res){
    data.push(req.body)
    console.log(data)
 } 