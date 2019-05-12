const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database-mongo/index.js')

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => res.send('index.html'))


app.get('/notes', function (req, res) {
  db.Note.find({}).exec(function(err, data){
    console.log(data)
    res.send(data);
  })
});

app.post('/notes', (req, res) => {

  let username = req.body.username
  let userNote = req.body.myNote
  let noteData = {
    username : username,
    note : userNote  
  }
   
  db.save(noteData)
  })
  


app.listen(port, () => console.log(`listening on port ${port}!`))
