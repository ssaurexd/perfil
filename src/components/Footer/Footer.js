import React from 'react'
import './footer.scss'


const Footer = () => {

	const year = new Date()
	
	return (
		
		<footer className='footer'>
			<p>Desarrollado por:</p>
			<p>Aureliano Torres Sandoval</p>
			<p>	&copy; { year.getFullYear() } </p>
		</footer>
	)
}

export default Footer
