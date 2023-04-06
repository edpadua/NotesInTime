import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { nanoid } from 'nanoid';
import './App.css'
import NoteList from './Components/NoteList'


function App() {

  
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
      time: '12:00'
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
      time:'15:30'
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
      time: '10:15'
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
      time: '14:15'
		},
	]);


  const [count, setCount] = useState(0)

  const goToBottom = () => {
   
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
};

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
      time:   date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
    goToBottom();
	};


  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  return (
    <div className="App">
       
           <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      
        
    </div>
  )
}

export default App
