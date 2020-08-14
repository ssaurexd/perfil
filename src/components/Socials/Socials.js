import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
//
import React from 'react'
import './socials.scss'


const Socials = () => {

	return (

		<div className='social-container'>
			<a href='https://github.com/sanjisand' target='_blank' >
				<FaGithubSquare />
			</a>

			<a href='https://www.facebook.com/sanji.sand.9/' target='_blank' >
				<FaFacebookSquare />
			</a>

			<a href='https://www.instagram.com/ssanjisand/' target='_blank' >
				<FaInstagramSquare />
			</a>

			<a href='https://twitter.com/SanjiSand1' target='_blank' >
				<FaTwitterSquare />
			</a>
		</div>
	)
}

export default Socials
