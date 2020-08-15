import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
//
import React from 'react'
import './socials.scss'


const Socials = () => {

	return (

		<div className='social-container'>
			<a href='https://github.com/sanjisand' target='_blank' rel='noopener noreferrer' >
				<FaGithubSquare />
			</a>

			<a href='https://www.facebook.com/sanji.sand.9/' target='_blank' rel='noopener noreferrer' >
				<FaFacebookSquare />
			</a>

			<a href='https://www.instagram.com/ssanjisand/' target='_blank' rel='noopener noreferrer' >
				<FaInstagramSquare />
			</a>

			<a href='https://twitter.com/SanjiSand1' target='_blank' rel='noopener noreferrer' >
				<FaTwitterSquare />
			</a>
		</div>
	)
}

export default Socials
