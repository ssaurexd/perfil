import React from 'react'
import './portfolio.scss'
import imgCineteca from '../../static/images/cineteca.jpg'
import imgFukuro1 from '../../static/images/fukuro.jpg'
import imgFukuro2 from '../../static/images/fukuro2.jpg'
import imgLogin from '../../static/images/login.jpg'
import imgHeroes from '../../static/images/heroes.jpg'
import imgCrud from '../../static/images/crud.jpg'
//
import PortfolioCard from '../PortfolioCard/PortfolioCard'


const Portfolio = ({ show }) => {
	
	return (
	
		<section className={ show ? 'portfolio showSkills' : 'portfolio' } >
			<PortfolioCard 
				img={ imgCineteca }
				title='Videoteca Digital'
				description='Proyecto realizado en la Cineteca Nacional de México como parte de mis practicas profesionales en un periodo de 6 meses'
				tecnologies={ [ 'DiPhp', 'DiJavascript', 'DiMysql', 'DiJqueryLogo', 'DiHtml5', 'DiBootstrap' ] }
				demo='#'
				code='#'
			/>

			<PortfolioCard 
				img={ imgFukuro1 }
				title='Fukuro'
				description='Proyecto personal resarrollado como practica, es la parte Back-End con Django Rest Framework'
				tecnologies={ [ 'DiPython', 'DiPostgresql'] }
				demo='#'
				code='https://github.com/sanjisand/libreria'
			/>

			<PortfolioCard 
				img={ imgFukuro2 }
				title='Fukuro'
				description='Proyecto personal resarrollado como practica, es la parte Front-End con React'
				tecnologies={ [ 'DiHtml5', 'DiReact', 'DiCss3', 'DiJavascript'] }
				demo='https://upbeat-minsky-fab0d1.netlify.app/'
				code='https://github.com/sanjisand/libreria-react'
			/>

			<PortfolioCard 
				img={ imgLogin }
				title='Sencillo login'
				description='Es una practica simple donde se muestra el funcionamiento de iniciar sesión'
				tecnologies={ [ 'DiHtml5', 'DiJavascript', 'DiBootstrap', 'DiReact' ] }
				demo='https://login-portfolio.netlify.app/'
				code='https://github.com/sanjisand/libreria-react'
			/>
			<PortfolioCard 
				img={ imgHeroes}
				title='Heroes'
				description='Proyecto realizado en curso de React, pone en practiva react-router, Redux'
				tecnologies={ [ 'DiCss3', 'DiJavascript', 'DiReact', 'DiHtml5', 'DiBootstrap' ] }
				demo='https://priceless-hodgkin-e1a9c5.netlify.app'
				code='https://github.com/sanjisand/heroes'
			/>
			<PortfolioCard 
				img={ imgCrud}
				title='Crud'
				description='Create, Delete, Update, Read'
				tecnologies={ [ 'DiJavascript', 'DiHtml5', 'DiBootstrap', 'DiReact' ] }
				demo='https://crud-portfolio.netlify.app/'
				code='https://github.com/sanjisand/crud'
			/>			
		</section>
	)
}

export default Portfolio
