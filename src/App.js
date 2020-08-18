import { BrowserRouter as Router } from 'react-router-dom'
//
import React, { useState } from 'react'
import './app.scss'
//
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Message from './components/Message/Message'


const App = () => {

	const [showMsg, setShowMsg] = useState(true)

	return (
		
		<Router>
			<div className='app' >
				{/* { showMsg && (
					<Message 
						setShowMsg={ setShowMsg }
						showMsg={ showMsg }
					/>
				)} */}

				<Sidebar />

				<Main />
			</div>
		</Router>
	)
}

export default App
