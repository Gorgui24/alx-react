import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import WithLoggingHOC from '../HOC/WithLogging'

class App extends Component {
	render() {
		return (
			<React.Fragment>
			<div className="App">
					<body className={css(loginStyles.appBody)}>
						<div className={css(loginStyles.inputs)}>
						<p>Login to access the full dashboard</p>
	  					<form action="#">
  							<label className={css(loginStyles.label)} for="Ename">Email: </label>
  							<input className={css(loginStyles.input) type="text" id="Email" name="Email"/>
 							<label className={css(loginStyles.label)} for="Password">Password: </label>
  							<input className={css(loginStyles.input) type="text" id="Password" name="Password"/>
 							<input className={css(loginStyles.button)} type="submit" value="OK"/>
						</form> 
						</div>
					</body>
			</div>
			</React.Fragment>
		)
	}
}
const primaryColor = '#E11D3F';

const loginStyles = StyleSheet.create({
	appBody: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '3rem',
		height: '100%',
	},

	inputs: {
		'@media (min-width: 350px)': {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '200px'
		},
		'@media (min-width: 900px)': {
			display: 'flex',
			flexDirection: 'row',
		}
	},

	input: {
		height: '15px',
		marginLeft: '0.2rem',
		marginTop: '0.5rem',
	},

	label: {
		marginTop: '0.5rem',
	},

	button: {
		height: '21px',
		marginTop: '0.6rem',
		maxWidth: '40px',
	}

})
export default WithLoggingHOC(Login)
