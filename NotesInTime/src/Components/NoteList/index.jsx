import React from 'react'
import './NoteList.css'

import Note from '../Note'
import AddNote from '../AddNote'

function NoteList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes-list'>
      <div className='container'>
      {notes.map((note) => (
				<Note key={note.id}
					id={note.id}
					text={note.text}
          imgurl={note.imgurl}
					date={note.date}
					time={note.time}
                    handleDeleteNote={handleDeleteNote}
				/>
			))}
       </div>
            <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList
