import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignIn from './components/SignIn.jsx';
import Notes from './components/Notes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: [],
      user:''
    }
  }

  start(user) {
    console.log(`${user} Signed In!`);
    this.setState({user:user})
  };

  takeNote(note) {
    console.log (`${note} is saved`)
    $.ajax({
      type: "POST",
      url: '/notes',
      data: {myNote : note,
      username:this.state.user},
      success: () => ('Post Successful!')
    });

  }  

  render () {
    return (<div>
      <h1 id='One'>Welcome To Noter!</h1>
      <div>
        <SignIn onStart={this.start.bind(this)}/> <br/>
      </div>
      <div id='notes' >
        <Notes takingNote={this.takeNote.bind(this)} />
      </div>
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));