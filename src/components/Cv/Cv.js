import { FaCloudDownloadAlt } from 'react-icons/fa'
//
import React from 'react'
import './cv.scss'


const Cv = () => {

	const descargarCV = () => {
		
	}
	
	return (

		<button
			className='btn-cv'
			onClick={ () => descargarCV() }
		>
			<FaCloudDownloadAlt /> Descargar CV	
		</button>
	)
}

export default Cv
