import React, { Component } from 'react'
import './Login.css'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
			<div className="App">
					<body className="App-body">
						<p>Login to access the full dashboard</p>
	  					<form action="#">
  							<label for="Ename">Email: </label>
  							<input type="text" id="Email" name="Email"/>
 							<label for="Password">Password: </label>
  							<input type="text" id="Password" name="Password"/>
 							<input type="submit" value="OK"/>
						</form> 
					</body>
			</div>
			</React.Fragment>
		)
	}
}
