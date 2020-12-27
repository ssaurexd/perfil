import {
	Switch,
	Route,
	useLocation,
	Redirect
} from "react-router-dom"  
//
import React, { useState, useEffect, useRef } from 'react'
import './main.scss'
//
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import AboutMe from '../AboutMe/AboutMe'


const Main = () => {

	const [ path, setPath ] = useState('')
	const main = useRef()
	const location = useLocation()
	
	//registra cuando el path cambia y lo asigna al state 'path'
	useEffect( () => {
		
		setPath(location.pathname )
	}, [ location ])
	
	// Para que el nav tenga otra clase al hacer scroll
	const handleScroll = () => {
		
		const navH = main.current.firstChild.scrollHeight
		const scrollH = main.current.scrollTop
		
		if( navH < scrollH ){
			main.current.firstChild.classList = 'nav-fixed'
		}
		else{
			main.current.firstChild.classList = 'nav'
		}
	}
	
	return (

		<main className='main' ref={ main } onScroll={ handleScroll } >
			<Nav />

			<Switch>
				<Route path='/perfil/' exact >
					<Home 
						show={ path === '/perfil/' ? true : false }
					/>
				</Route>

				<Route path='/perfil/portafolio' exact >
					<Portfolio 
						show={ path === '/perfil/portafolio' ? true : false }
					/>
				</Route>

				<Route path='/perfil/habilidades' exact >
					<Skills 
						show={ path === '/perfil/habilidades' ? true : false }
					/>
				</Route>

				<Route path='/perfil/sobre-mi' exact >
					<AboutMe 
						show={ path === '/perfil/sobre-mi' ? true : false }
					/>
				</Route>

				<Redirect to='/perfil/' exact />	
				
			</Switch>
		</main>
	)
}

export default Main
