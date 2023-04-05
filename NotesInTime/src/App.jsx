import { useState } from 'react'
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
		},
	]);


  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NoteList notes={notes}/>
    </div>
  )
}

export default App
