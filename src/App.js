import { BrowserRouter as Router } from 'react-router-dom'
//
import React from 'react'
import './app.scss'
//
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'


const App = () => {

	return (
		
		<Router>
			<div className='app' >
				
				<Sidebar />

				<Main />
			</div>
		</Router>
	)
}

export default App
