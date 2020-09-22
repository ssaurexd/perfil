import { FaCloudDownloadAlt } from 'react-icons/fa'
//
import React from 'react'
import './cv.scss'
import cvPDF from '../../static/cv/cv.pdf'


const Cv = () => {
	
	return (

		<a
			className='btn-cv'
			target='_blank' rel='noopener noreferrer'
			href={ cvPDF }
		>
			<FaCloudDownloadAlt /> Descargar CV	
		</a>
	)
}

export default Cv
