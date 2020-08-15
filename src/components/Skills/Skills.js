import {  
	FaCheckDouble,
	FaPython,
	FaNodeJs,
	FaPhp,
	FaGithub
} from 'react-icons/fa'
import { 
	DiMsqlServer, 
	DiMysql,
	DiPostgresql,
	DiMongodb,
	DiHtml5,
	DiReact,
	DiBootstrap,
	DiCss3,
	DiJavascript1,
	DiJqueryLogo,
	DiDjango,
	DiGitBranch
} from 'react-icons/di'
import {
	AiOutlineAntDesign
} from 'react-icons/ai'
//
import React from 'react'
import './skills.scss'


const Skills = ({ show }) => {
	
	return (
	
		<section className={ show ? 'skills showSkills' : 'skills' } >
			<div className="skill">
				<div className="title">
					<h2>Habilidades Blandas</h2>
				</div>

				<div className="skill-soft">
					<i className='ico' >
						<FaCheckDouble />
					</i>
					
					<ul>
						<li>Proactivo</li>
						<li>Autodidacta</li>
						<li>Responsable</li>
						<li>Puntualidad</li>
						<li>Adaptabilidad</li>
					</ul>
					<ul>
						<li>Flexibilidad</li>
						<li>Planificación</li>
						<li>Gestión del tiempo</li>
					</ul>
				</div>

				<div className="title">
					<h2>Habilidades Tec.</h2>
				</div>

				{/*--- Mis conocimientos en Bases de datos ---*/}
				<div className="skill-hard">
					<h3>Bases de Datos</h3>

					<div>
						<div className="chart-container">
							<span className='logo' >
								<DiMysql />
							</span>
							<p>MySQL</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiPostgresql />
							</span>
							<p>PostgreSQL</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiMongodb />
							</span>
							<p>MongoDB </p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'70%'}} ></div>
								<span className='percentage'> 70% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiMsqlServer />
							</span>
							<p>SQL Server</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'60%'}} ></div>
								<span className='percentage'> 60% </span>
							</div>
						</div>
					</div>
				</div>
				{/*----------------------------------------------*/}

				<div className="hr"></div>

				{/*--- Mis conocimientos en Front-end---*/}
				<div className="skill-hard">
					<h3>Front-End</h3>

					<div>
						<div className="chart-container">
							<span className='logo' >
								<DiHtml5 />
							</span>
							<p>HTML5</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'99%'}} ></div>
								<span className='percentage'> 99% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiReact />
							</span>
							<p>ReactJS</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<DiReact />
							</span>
							<p>Material UI</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiReact />
							</span>
							<p>Redux</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<AiOutlineAntDesign />
							</span>
							<p>Ant Design</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiBootstrap />
							</span>
							<p>Bootstrap</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<DiCss3 />
							</span>
							<p>CSS3</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'85%'}} ></div>
								<span className='percentage'> 85% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<DiJavascript1 />
							</span>
							<p>JavaScript</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'80%'}} ></div>
								<span className='percentage'> 80% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<DiJqueryLogo />
							</span>
							<p>JQuery</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'80%'}} ></div>
								<span className='percentage'> 80% </span>
							</div>
						</div>
					</div>
				</div>
				{/*----------------------------------------------*/}

				<div className="hr"></div>

				{/*--- Mis conocimientos en Front-end---*/}
				<div className="skill-hard">
					<h3>Back-End</h3>

					<div>
						<div className="chart-container">
							<span className='logo' >
								<DiDjango />
							</span>
							<p>Django</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<FaNodeJs />
							</span>
							<p>ExpressJS</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'90%'}} ></div>
								<span className='percentage'> 90% </span>
							</div>
						</div>

						<div className="chart-container">
							<span className='logo' >
								<FaPython />
							</span>
							<p>Python</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'80%'}} ></div>
								<span className='percentage'> 80% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<FaPhp />
							</span>
							<p>PHP</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'80%'}} ></div>
								<span className='percentage'> 80% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<DiDjango />
							</span>
							<p>DRF</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'70%'}} ></div>
								<span className='percentage'> 70% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<FaNodeJs />
							</span>
							<p>NodeJS</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'50%'}} ></div>
								<span className='percentage'> 50% </span>
							</div>
						</div>
					</div>
				</div>
				{/*----------------------------------------------*/}
				
				<div className="hr"></div>

				{/*--- Mis conocimientos en Front-end---*/}
				<div className="skill-hard">
					<h3>Control de Versiones</h3>

					<div>
						<div className="chart-container">
							<span className='logo' >
								<FaGithub />
							</span>
							<p>GitHub</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'80%'}} ></div>
								<span className='percentage'> 80% </span>
							</div>
						</div>
						
						<div className="chart-container">
							<span className='logo' >
								<DiGitBranch />
							</span>
							<p>Git</p>
							<div className="chart">
								<div className="chart-feeder" style={{width:'70%'}} ></div>
								<span className='percentage'> 70% </span>
							</div>
						</div>
					</div>
				</div>
				{/*----------------------------------------------*/}	
			</div>
		</section>
	)
}

export default Skills
