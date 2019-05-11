import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignIn from './components/SignIn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: []
    }
  }

  start(user) {
    console.log(`${user} Signed In!`);
    // TODO HERE AJAX POST REQUEST
    };

  render () {
    return (<div>
      <h1 id='One'>Welcome To Noter!</h1>
      <SignIn onStart={this.start.bind(this)}/>
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));