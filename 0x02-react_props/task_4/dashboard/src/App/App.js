import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import propTypes from 'prop-types'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Notifications />
					<Header />
					<div className="App-body">
						{isLoggedIn ? <CourseList /> : <Login />}
					</div>
					<div className="App-footer">
						<Footer />
					</div>
				</div>
			</React.Fragment>
		)
	}
}
App.defaultProps = {
	isLoggedIn: false
}

App.propTypes = {
	isLoggedIn: propTypes.bool
}
