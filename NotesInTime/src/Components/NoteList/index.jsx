import React from 'react'
import './NoteList.css'

import Note from '../Note'

function NoteList({notes}) {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					time={note.time}
				/>
			))}
    </div>
  )
}

export default NoteList
