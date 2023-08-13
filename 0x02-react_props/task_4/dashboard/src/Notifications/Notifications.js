import React from 'react'
import close_icon from '../close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'
import './Notifications.css'

export default function Notification(props) {
  return (
	  <>
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			{displayDrawer && (
				<div className="Notifications">
					<button style={{
						position: 'absolute',
						background: 'transparent',
						border: 'none',
						right: '20px',
					}}
						aria-label='close'
						onClick={() => {
							console.log('Close button has been clicked');
						}}>
						<img src={close_icon} alt="close" height="15px" width="15px"></img>
					</button>
					<p>Here is the list of notifications</p>
					<ul>
						<NotificationItem type="default" value="New course available" />
						<NotificationItem type="urgent" value="New resume available" />
						<NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
					</ul>
				</div>
			)}
		</>
	)
  )
}
Notification.defaultProps = {
	displayDrawer: false
}

Notification.propTypes = {
	displayDrawer: propTypes.bool
}
