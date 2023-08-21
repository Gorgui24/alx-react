import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import { StyleSheet, css } from 'aphrodite'

export default function Header(props) {
	return (
		<header className={css(headerStyles.root, headerStyles.appHeader)}>
			<img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
			<h1 className={css(headerStyles.h1)}>School dashboard</h1>
		</header>
	)
}
const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
	h1: {
		marginLeft: '3rem'
	},

	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: `${primaryColor}`,
		borderBottom: `1px solid ${primaryColor}`,
	},

	appLogo: {
		height: '200px',
		width: '200px'
	}
});
