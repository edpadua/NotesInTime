import React from 'react'

import { useState } from 'react';

import InputEmoji from "react-input-emoji";

import { BiImageAdd } from "react-icons/bi";

import './AddNote.css'

function AddNote({ handleAddNote }) {

    const [noteText, setNoteText] = useState('');

    const [file, setFile] = useState();

    const handleChange = (event) => {

        setNoteText(event.target.value);

    };



    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText, file);
            setNoteText('');
            setFile('');
        }

    };

    function handleOnEnter(text) {
        console.log("enter", text);
    }

    function handleChangeFile(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="new-note">
            <div className="note-content">
                <div className='inputData'>
                    <InputEmoji
                        className='form-control new-note-text'
                        value={noteText}
                        onChange={setNoteText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Escreva sua nota..."
                    />
                    <label className="uploadLabel" for="arquivo"><BiImageAdd size={24} className='uploadImage' /></label>
                    <input type="file" name="arquivo" id="arquivo" onChange={handleChangeFile} accept="image/*" />
                </div>




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
