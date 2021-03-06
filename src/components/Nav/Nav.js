import { NavLink } from 'react-router-dom'
import { FaHome, FaFolder, FaChartBar, FaHeart } from 'react-icons/fa'
//
import React from 'react'
import './nav.scss'


const Nav = () => {

	return (

		<nav  className='nav'>
				
			<ul className='nav-menu' >
				<li className='menu-opcion' > 	
					<NavLink to='/perfil/' activeClassName='active' exact > 
						<FaHome /> Inicio
					</NavLink> 
				</li>
				
				<li className='menu-opcion' > 
					<NavLink to='/perfil/portafolio' activeClassName='active' exact >
						<FaFolder /> Portafolio
					</NavLink> 
				</li>
				
				<li className='menu-opcion' > 
					<NavLink to='/perfil/habilidades' activeClassName='active' exact >
						<FaChartBar /> Habilidades
					</NavLink> 
				</li>
				
				<li className='menu-opcion' > 
					<NavLink to='/perfil/sobre-mi'  activeClassName='active' exact >
						<FaHeart /> Sobre mí
					</NavLink> 
				</li>
			</ul>
		</nav>
	)
}

export default Nav
