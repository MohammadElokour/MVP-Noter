const express = require('express');
// const items = require('../database-mysql');
const {bodyParser, printTime} = require('./middleware');



const app = express();
const port = 3000;
app.use(express.static(__dirname + '/../react-client/dist'));

let database = {notes: [{username : 'note'}]};

app.get('/', (req, res) => res.send('index.html'))
app.get('/notes', (req, res) => res.send(database.notes))

app.post('/notes', (req, res) => {
    console.dir(req.body);
    res.send('ok');
    const note = req.body
    database.notes.push(note)
  })
  


app.listen(port, () => console.log(`listening on port ${port}!`))
