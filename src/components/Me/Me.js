import React from 'react'
import imgPerfil from '../../static/images/perfil.jpg'
import './me.scss'


const Me = () => {
	
	return (

		<div className='perfil'>
			<div className="img">
				<img
					className='img-img' 
					src={ imgPerfil } 
					alt="perfil" 
				/>
			</div>
			<div className="info">
				<p>Aureliano Torres Sandoval</p>
				<p className='ing' >Ing. En Tecnologias de la Información y Comunicaciones</p>
				<p className="ing">Desarrollador Full-Stack</p>
			</div>
		</div>
	)
}

export default Me
