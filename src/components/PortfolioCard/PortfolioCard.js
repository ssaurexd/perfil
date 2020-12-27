import {
	DiPhp,
	DiJavascript,
	DiCss3,
	DiMysql, 
	DiJqueryLogo,
	DiDjango,
	DiReact,
	DiPython,
	DiNodejs,
	DiBootstrap,
	DiHtml5,
	DiPostgresql,
	DiFirebase,
	DiMongodb
} from 'react-icons/di'
import {
	AiOutlineAntDesign,
	AiOutlineCloseCircle,
	AiOutlineMore,
	AiOutlineGithub
} from 'react-icons/ai'
//
import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'
import './portfolioCard.scss'


const PortfolioCard = ( props ) => {

	const { 
		title, 
		description, 
		img, 
		tecnologies,
		demo, 
		code,
		disableBtnDemo,
		disableBtnGit,
		stack 
	} = props

	const showInfo = useRef()

	const handleAddCloseAnimation = () => {

		showInfo.current.classList.add( 'show-info__animationOut' )
		showInfo.current.classList.remove( 'show-info__animationIn' )
	}
	
	const handleAddAnimation = () => {

		showInfo.current.classList.remove( 'show-info__animationOut' )
		showInfo.current.classList.add( 'show-info__animationIn' )
	}

	return (

		<div className='portfolio-card' >
			<div className="card-header">
				<h3> { stack } </h3>
				
				{
					!disableBtnGit && (

						<a href={ code }>
							<div className="github">
								<AiOutlineGithub className="github__ico" />
							</div>
						</a>
					)
				}

				<img className='card-img'  src={ img } alt={ title } />
			</div>

			<div className="show-info" ref={ showInfo } >

				<div className="btn-close">
					<button
						onClick={ handleAddCloseAnimation }
					>
						<AiOutlineCloseCircle className='btn-close__ico' />
					</button>
				</div>

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
									{
										item === 'DiMongodb' && <DiMongodb className='ico' />
									}
									{
										item === 'DiNodejs' && <DiNodejs className='ico' />
									}
								</Fragment>
							))
						}
					</div>
				</div>
			</div>

			<div className="card-footer">
				<div className="btn-showInfo">
					<button
						onClick={ handleAddAnimation }
					>
						<AiOutlineMore className='btn-showInfo__ico' />
					</button>
				</div>
			
				<div className="btn-group">
					<a 
						href={ demo } 
						className={ disableBtnDemo ? 'card-btn disableLink' : 'card-btn'} 
						target='_blank' 
						rel='noopener noreferrer'
					>
						Ver demo
					</a>	
				</div>
			</div>
		</div>
	)
}

PortfolioCard.propTypes = {
	title: PropTypes.string.isRequired, 
	description: PropTypes.string.isRequired, 
	img: PropTypes.string.isRequired, 
	tecnologies: PropTypes.arrayOf( PropTypes.string ).isRequired,
	demo: PropTypes.string.isRequired, 
	code: PropTypes.string.isRequired, 
	disableBtnGit: PropTypes.bool.isRequired, 
	disableBtnDemo: PropTypes.bool.isRequired,
	stack: PropTypes.string.isRequired
}


export default PortfolioCard
