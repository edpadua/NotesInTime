import React from 'react'

import { useState } from 'react';

import InputEmoji from "react-input-emoji";

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

    function handleOnEnter(text) {
        console.log("enter", text);
    }


    return (
        <div className="new-note">
            <div className="note-content">
                <InputEmoji
                    className='form-control new-note-text'
                    value={noteText}
                    onChange={setNoteText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Escreva sua nota..."
                />
                

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
