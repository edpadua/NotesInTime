import React from 'react'
import './Note.css'

import { FaTrash, FaClock } from "react-icons/fa"

function Note({ id, text, imgurl,date, time, handleDeleteNote }) {
    return (
        <div className="note">
            <div className="note-content">
                <div className="text-note">
                    <p>{text}</p>
                </div>
                <div>
                <img className="img-note" src={imgurl} />
                </div>
                <div className="info-note">
                    <FaClock/>&nbsp;<p>{date} - {time}</p>
                    
                </div>
                <div className="note-actions">
                <FaTrash className="delete-icon" onClick={() => handleDeleteNote(id)} />
                </div>
            </div>
        </div>
    )
}

export default Note
