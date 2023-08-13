import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import { getFullYear, getFooterCopy } from '../utils/utils'
function App() {
  return (
	  <div className="App">
	  	<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
		  	<h1>School dashboard</h1>
	  	</header>
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
	  	<footer className="App-footer">
	  		<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>
	</div>
  );
}

export default App;
