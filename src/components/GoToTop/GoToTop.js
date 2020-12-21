import React, { useRef } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import './gototop.scss'


const GoToTop = () => {

	const gototopRef = useRef()
	
	/* Envia el scroll al Nav */
	const handleClick = () => {

		const navHeight = gototopRef.current.parentElement.parentElement.children[0].scrollHeight

		window.scrollTo({ top: navHeight, behavior: 'smooth' })
	}
	
	//detecta si el scroll es mayor igual al ultimo hijo
	window.onscroll = () => {
	
		let projects = gototopRef.current.parentElement.lastChild.children
		let lastchild = projects[ projects.length -1 ].offsetTop

		if( window.scrollY > lastchild ) {

			gototopRef.current.classList.remove('hide__ico')
			gototopRef.current.classList.add('show__ico')
		}
		else {
			
			gototopRef.current.classList.remove('show__ico')
			gototopRef.current.classList.add('hide__ico')
		}
			
	}

	return (
		
		<div 
			ref={ gototopRef } 
			onClick={ handleClick }
			className="gototop-container gototop hide__ico"
		>
			<MdKeyboardArrowUp className='gototop-container__ico' />
		</div>
	)
}

export default GoToTop