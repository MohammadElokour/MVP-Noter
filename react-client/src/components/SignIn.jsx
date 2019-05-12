import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.onChange = this.onChange.bind(this);
    this.start = this.start.bind(this);
  }

  onChange (e) {
    this.setState({
      user: e.target.value
    });
  }
  
  start(e) {
    e.preventDefault();
    this.props.onStart(this.state.user);
  }
  
  render() {
    return (
      <div>
        <form className='userInput'>
          <input id='userTextInput' value={this.state.users} onChange={this.onChange} placeholder="input username" /><br />
          <button onClick={this.start}>Sign In!</button>
        </form>
      </div>
    )
  }

}


export default SignIn;