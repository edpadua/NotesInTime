import React from 'react'
import './Note.css'

import { FaTrash } from "react-icons/fa"

function Note({ id, text, date, time}) {
    return (
        <div className="note">
            <div className="note-content">
                <div className="text-note">
                    <p>{text}</p>
                </div>
                <div className="info-note">
                    <p>{date} - {time}</p>
                    
                </div>
                <div className="note-actions">
                <FaTrash className="delete-icon" />
                </div>
            </div>
        </div>
    )
}

export default Note