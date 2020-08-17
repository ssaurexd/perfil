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
					Lamento las molestias, si algunas partes no se adaptan bien a tu dispositivo móvil es porque la parte para móvil aún se encuentra en desarrollo.
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
