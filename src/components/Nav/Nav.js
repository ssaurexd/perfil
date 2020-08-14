import { FaHome, FaFolder, FaChartBar, FaHeart } from 'react-icons/fa'
//
import React from 'react'
import './nav.scss'


const Nav = () => {
	
	return (

		<nav className='nav' >
				
			<ul className='nav-menu' >
				<li className='menu-opcion' > 	
					<a href='/' >
						<FaHome /> Inicio
					</a> 
				</li>
				
				<li className='menu-opcion' > 
					<a href='#portafolio' >
						<FaFolder /> Portafolio
					</a> 
				</li>
				
				<li className='menu-opcion' > 
					<a href='#habilidades' >
						<FaChartBar /> Habilidades
					</a> 
				</li>
				
				<li className='menu-opcion' > 
					<a href='#sobre-mi' >
						<FaHeart /> Sobre mi
					</a> 
				</li>
			</ul>
		</nav>
	)
}

export default Nav
