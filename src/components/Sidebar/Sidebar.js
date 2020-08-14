import React from 'react'
import './sidebar.scss'
//
import Cv from '../Cv/Cv'
import Me from '../Me/Me'
import Socials from '../Socials/Socials'
import Footer from '../Footer/Footer'


const Sidebar = () => {

	return (

		<aside className='sidebar' >
			<div className="cv">
				<Cv />
			</div>

			<div className="me">
				<Me />
			</div>

			<div className="socials">
				<Socials />
			</div>

			<div className="footer">
				<Footer />
			</div>
		</aside>
	)
}

export default Sidebar
