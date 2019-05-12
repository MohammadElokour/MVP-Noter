import React from 'react';

const NoteList = (props) => {
  <div>
    There are {props.notes.length} notes.
    <ul>
       {
         props.notes.map((note,i) => {
          return  <li key={i}> {notes.username} {" :"}  {notes.note}  </li>
        })  
      }
    </ul>
  </div>
}

export default NoteList;