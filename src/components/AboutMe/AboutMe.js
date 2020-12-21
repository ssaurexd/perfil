import Typed from 'react-typed'
//
import React from 'react'
import './aboutme.scss'
import imgPerfil from '../../static/images/perfil.jpg'
import imgC1 from '../../static/certificates/c1.jpg'
import imgC2 from '../../static/certificates/c2.jpg'
import imgC3 from '../../static/certificates/c3.jpg'
import imgC4 from '../../static/certificates/c4.jpg'
import imgC5 from '../../static/certificates/c5.jpg'
import imgC6 from '../../static/certificates/c6.jpg'
import imgC7 from '../../static/certificates/c7.jpg'
import imgC8 from '../../static/certificates/c8.jpg'
import GoToTop from '../GoToTop/GoToTop'


const AboutMe = ({ show }) => {

	return (

		<div>

			<GoToTop />

			<section className={ show ? 'about-me showSkills' : 'about-me' } >


				<div className='about-me__perfil'>
					<div className="perfil-img">
						<img
							className='perfil-img_img' 
							src={ imgPerfil } 
							alt="perfil" 
						/>
					</div>
					<div className="perfil-info">
						<p className='un-poquito' >Un poquito de mí.</p>
						<p className='about' >
							Soy Ingeniero en Tecnologías de la Información y Comunicaciones, me apasiona la programación, los animales y la mitología Lovecraftiana. Mis autores favoritos son <span>Edgar Allan Poe</span> , <span>Howard Phillips Lovecraft</span> y <span>Michel Houellebecq</span>.
						</p>
						<p className='about'>
							Soy: 
						</p>
						<div className="iam" >
							<p>
								<Typed 
									strings={[ 'Developer', 'Front-End', 'Gamer', 'Back-End', 'Full-Stack', 'Web Developer' ]}
									loop={true}
									typeSpeed={60}
									backSpeed={ 40 }
								/>
							</p>
						</div>
					</div>
				</div>

				<div className="title">
					<h2>Algunas Certificaciones</h2>
				</div>
				
				<div className="certifications">
					<div className="certification">
						<img src={ imgC1 } alt="c1"/>
					</div>

					<div className="certification">
						<img src={ imgC2 } alt="c2"/>
					</div>

					<div className="certification">
						<img src={ imgC3 } alt="c3"/>
					</div>

					<div className="certification">
						<img src={ imgC4 } alt="c4"/>
					</div>

					<div className="certification">
						<img src={ imgC5 } alt="c5"/>
					</div>

					<div className="certification">
						<img src={ imgC6 } alt="c6"/>
					</div>

					<div className="certification">
						<img src={ imgC7 } alt="c7"/>
					</div>

					<div className="certification">
						<img src={ imgC8 } alt="c8"/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutMe
