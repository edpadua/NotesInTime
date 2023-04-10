import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { nanoid } from 'nanoid';
import './App.css'
import NoteList from './Components/NoteList'
import Header from './Components/Header';


function App() {

  
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Esta é a minha primeira nota',
			date: '01/04/2023',
      time: '12:00'
		},
		{
			id: nanoid(),
			text: 'Esta é a minha segunda nota',
			date: '04/04/2023',
      time:'15:30'
		},
		{
			id: nanoid(),
			text: 'Esta é a minha terceira nota',
			date: '09/04/2023',
      time: '10:15'
		},
		{
			id: nanoid(),
			text: 'Esta é minha nova nota',
			date: '10/04/2021',
      time: '14:00'
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
    const locale = 'en';
		const date = new Date();
    const hour = date.getHours();
    const time = date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

 
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
      time: time,
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
           <Header/>
           <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      
        
    </div>
  )
}

export default App
