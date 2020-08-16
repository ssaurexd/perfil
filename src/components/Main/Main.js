import {
	Switch,
	Route,
	useLocation
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

	const [path, setPath] = useState('')
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

				<Route path='/perfil' exact >
					<Home 
						show={ path === '/perfil' ? true : false }
					/>
				</Route>

				<Route path='/portafolio' exact >
					<Portfolio 
						show={ path === '/portafolio' ? true : false }
					/>
				</Route>

				<Route path='/habilidades' exact >
					<Skills 
						show={ path === '/habilidades' ? true : false }
					/>
				</Route>

				<Route path='/sobre-mi' exact >
					<AboutMe 
						show={ path === '/sobre-mi' ? true : false }
					/>
				</Route>				

			</Switch>
		</main>
	)
}

export default Main
