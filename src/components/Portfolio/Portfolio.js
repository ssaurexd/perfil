import React from 'react'
import './portfolio.scss'
import imgCineteca from '../../static/images/cineteca.jpg'
import imgFukuro1 from '../../static/images/fukuro.jpg'
import imgFukuro2 from '../../static/images/fukuro2.jpg'
import imgLogin from '../../static/images/login.png'
import imgHeroes from '../../static/images/heroes.jpg'
import imgCrud from '../../static/images/crud.jpg'
import imgTodo from '../../static/images/todo.jpg'
import imgRomenher from '../../static/images/romanher.png'

//
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import GoToTop from '../GoToTop/GoToTop'


const Portfolio = ({ show }) => {
	
	return (
		<div className="portfolio-container">
			<GoToTop />

			<div className="title">
				<h2>Portafolio</h2>
			</div>
			
			<section className={ show ? 'portfolio showSkills' : 'portfolio' } >
				<PortfolioCard 
					img={ imgCineteca }
					title='Videoteca Digital'
					stack='Front-End/Back-End'
					description='Proyecto realizado en la Cineteca Nacional de México como parte de mis prácticas profesionales en un periodo de 6 meses.'
					tecnologies={ [ 'DiPhp', 'DiJavascript', 'DiMysql', 'DiJqueryLogo', 'DiHtml5', 'DiBootstrap' ] }
					demo='#'
					code='#'
					disableBtnDemo={ true }
					disableBtnGit={ true }
				/>

				<PortfolioCard 
					img={ imgRomenher }
					title='Landing Page'
					stack='Front-End'
					description='Landing page de una reposteria con llamado a la api de instagram'
					tecnologies={ [ 'DiJavascript', 'DiHtml5', 'DiReact', '', 'DiCss3', 'DiBootstrap' ] }
					demo='https://romanher.netlify.app/'
					code='https://github.com/ssaurexd/landing-page-cake'
					disableBtnDemo={ false } 
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgTodo }
					title='Todo list'
					stack='Front-End'
					description='Front-end de tareas por hacer'
					tecnologies={ [ 'DiJavascript', 'DiHtml5', 'DiReact', 'DiMongodb', 'AiOutlineAntDesign' ] }
					demo='https://laughing-bassi-2ba0eb.netlify.app'
					code='https://github.com/ssaurexd/todo-react'
					disableBtnDemo={ false } 
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgLogin }
					title='Login Firebase'
					stack='Front-End'
					description='Login con tematica de pokemon empleando firebase y redux'
					tecnologies={ [ 'DiHtml5', 'DiJavascript', 'DiFirebase', 'DiReact', 'AiOutlineAntDesign' ] }
					demo='https://cocky-saha-e11c8b.netlify.app'
					code='https://github.com/ssaurexd/pokemon'
					disableBtnDemo={ false }
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgFukuro2 }
					title='Fukuro'
					stack='Front-End'
					description='Librería, proyecto personal desarrollado como practica para la venta de libros, es la parte Front-End con React'
					tecnologies={ [ 'DiHtml5', 'DiReact', 'DiCss3', 'DiJavascript'] }
					demo='https://upbeat-minsky-fab0d1.netlify.app/'
					code='https://github.com/ssaurexd/libreria-react'
					disableBtnDemo={ false }
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgHeroes}
					title='Heroes'
					stack='Front-End'
					description='Proyecto realizado en curso de React, pone en práctica react-router, Redux.'
					tecnologies={ [ 'DiCss3', 'DiJavascript', 'DiReact', 'DiHtml5', 'DiBootstrap' ] }
					demo='https://priceless-hodgkin-e1a9c5.netlify.app'
					code='https://github.com/ssaurexd/heroes'
					disableBtnDemo={ false }
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgCrud}
					title='Crud'
					stack='Front-End'
					description='Create, Delete, Update, Read'
					tecnologies={ [ 'DiJavascript', 'DiHtml5', 'DiBootstrap', 'DiReact' ] }
					demo='https://crud-portfolio.netlify.app/'
					code='https://github.com/ssaurexd/crud'
					disableBtnDemo={ false }
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgFukuro1 }
					title='Fukuro'
					stack='Back-End'
					description='Proyecto personal desarrollado como practica, es la parte Back-End con Django Rest Framework.'
					tecnologies={ [ 'DiPython', 'DiPostgresql'] }
					demo='#'
					code='https://github.com/ssaurexd/libreria'
					disableBtnDemo={ true }
					disableBtnGit={ false }
				/>

				<PortfolioCard 
					img={ imgTodo }
					title='Todo list'
					stack='Back-End'
					description='Back-end de tareas por hacer'
					tecnologies={ [ 'DiJavascript', 'DiMongodb', 'DiNodejs' ] }
					demo='https://todo-node-ssaurexd.herokuapp.com/'
					code='https://github.com/ssaurexd/todo'
					disableBtnDemo={ false }
					disableBtnGit={ false }
				/>			
			</section>
		</div>	
	)
}

export default Portfolio
