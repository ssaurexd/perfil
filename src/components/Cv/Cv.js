import { FiMail } from 'react-icons/fi'
//
import React from 'react'
import './cv.scss'


const Cv = () => {
	
	return (

		<a
			className='btn-cv'
			target='_blank' rel='noopener noreferrer'
			href='mailto:ssaurexd@gmail.com?subject=Soliciar%20CV'
		>
			<FiMail className='btn-cv__ico' /> 
			Contactar
		</a>
	)
}

export default Cv
