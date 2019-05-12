let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/NoteDB',{ useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));


let noteSchema = mongoose.Schema({
  username: String,
  note: String
});

let Note = mongoose.model('Note', noteSchema);

let save = (
  data => {
  var datas = new Note(data);
  datas.save();
  }
)

module.exports.save = save;
module.exports.Note = Note;
