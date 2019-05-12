const express = require('express');
const bodyParser = require('body-parser')


const app = express();
const port = 3000;
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));


let database = [];
app.get('/', (req, res) => res.send('index.html'))


// app.get('/notes', (req, res) => res.send(database.notes))

app.post('/notes', (req, res) => {
  let username = req.body.username
  let myNote = req.body.myNote
  // console.log(username + ': ' + myNote)
  let noter = {
    user : username,
    notes : [myNote]
  }
  console.log(database)
  })
  


app.listen(port, () => console.log(`listening on port ${port}!`))
