import {
	DiPhp,
	DiJavascript,
	DiCss3,
	DiMysql, 
	DiJqueryLogo,
	DiDjango,
	DiReact,
	DiPython,
	DiBootstrap,
	DiHtml5,
	DiPostgresql,
	DiFirebase
} from 'react-icons/di'
import { FaGithubSquare } from 'react-icons/fa'
import {
	AiOutlineAntDesign
} from 'react-icons/ai'
//
import React, { Fragment } from 'react'
import './portfolioCard.scss'


const PortfolioCard = ({ title, description, img, tecnologies, demo, code }) => {

	return (

		<div className='portfolio-card' >
			<div className="card-header">
				<img className='card-img'  src={ img } alt={ title } />
			</div>

			<div className="show-info">
				<div className="card-body">
					<h6 className='card-title' >{ title }</h6>

					<p className='card-description' >{ description }</p>

					<div className="tecnologias">
						<p>Tecnologías: </p>
						{
							tecnologies.map( (item, index) => (
								<Fragment key={ index } >
									{
										item === 'DiPhp' && <DiPhp className='ico'/> 
									}
									{
										item === 'DiJavascript' && <DiJavascript className='ico' />
									}
									{
										item === 'DiCss3' && <DiCss3 className='ico'/> 
									}
									{
										item === 'DiMysql' && <DiMysql className='ico' /> 
									}
									{
										item === 'DiJqueryLogo' && <DiJqueryLogo className='ico' />
									}
									{
										item === 'DiDjango' && <DiDjango className='ico' />
									}
									{
										item === 'DiReact' && <DiReact className='ico' />
									}
									{
										item === 'DiPython' && <DiPython className='ico' />
									}
									{
										item === 'DiBootstrap' && <DiBootstrap className='ico' />
									}
									{
										item === 'DiHtml5' && <DiHtml5 className='ico' />
									}
									{
										item === 'DiPostgresql' && <DiPostgresql className='ico' />
									}
									{
										item === 'DiFirebase' && <DiFirebase className='ico' />
									}
									{
										item === 'AiOutlineAntDesign' && <AiOutlineAntDesign className='ico' />
									}
								</Fragment>
							))
						}
					</div>
				</div>

				<div className="card-footer">
					<a 
						href={ demo } 
						className='card-btn' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						Demo
					</a>

					<a href={ code } className='quita-borde' target='_blank' rel='noopener noreferrer' >
						<FaGithubSquare />
					</a>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCard
