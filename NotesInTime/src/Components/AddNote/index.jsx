import React from 'react'

import { useState } from 'react';

import './AddNote.css'

function AddNote({ handleAddNote }) {

  const [noteText, setNoteText] = useState('');


  const handleChange = (event) => {
    
        setNoteText(event.target.value);
   
};



  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText('');
    }
};
  

  return (
    <div className="new-note">
            <div className="note-content">
            <textarea className='new-note-text'
				rows='8'
				cols='10'
				placeholder='Escreva sua nota...'
				value={noteText}
				onChange={handleChange}></textarea>
                
                <div className="note-actions">
                <button className='save-button' onClick={handleSaveClick}>
					Salvar
				</button>
                </div>
            </div>
        </div>
  )
}

export default AddNote
