import React from 'react'
import './message.scss'

const Message = ({ setShowMsg }) => {
	
	return (

		<div className='message' >
			<div className="msg-container">
				<p>
					I know, I know "mobile first".
				</p>
				<p>
					Lamentamos las molestias, la parte para mobil aun se encuentra en desarrollo
				</p>
				<p>
					Tendras que mirar mi portafolio desde un ordenador.
				</p>
				<button
					onClick={ () => setShowMsg(false) }
				>
					X
				</button>
			</div>
		</div>
	)
}

export default Message
