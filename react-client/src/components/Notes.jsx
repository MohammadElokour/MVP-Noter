import React from 'react';
class Notes extends React.Component {
	constructor(props) {
   super(props);
   this.state = {
    note: ''
  }
  this.onChange = this.onChange.bind(this);
  this.takeNote = this.takeNote.bind(this);
	}


  onChange (e) {
    this.setState({
      note: e.target.value
    });
  }
  
  takeNote(e) {
    e.preventDefault();
    this.props.takingNote(this.state.note);
  }

	render() {
		return (
			<div>
				<input id="noteInput" value={this.state.note} onChange={this.onChange} placeholder="add a note here"/><br />
        <button onClick={this.takeNote}>Take Note</button>
			</div>
		);
	}
}

export default Notes;
