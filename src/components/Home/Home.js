import React, { useEffect } from 'react'
import './home.scss'


const Home = ({ show }) => {

	return (
		
		<section className={ show ? 'home animacion-in' : 'home' } >
			<h1 className="name">
				Hola, Soy
				Aureliano Torres Sandoval
			</h1>

			<p className='dev' >
				{' < Full-Stack Developer /> '}
			</p>

			<p className='frase' >
				“La emoción más antigua y más intensa de la humanidad es el miedo, y el más antiguo y más intenso de los miedos es el miedo a lo desconocido”.
			</p>
			
			<p className='author' >
				--H.P. Lovecraft
			</p>
		</section>
	)
}

export default Home
