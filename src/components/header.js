import React from 'react';

import './header.css';
import Navigation from './navigation';

export default function Header(props){
	return (
		<header>
			<Navigation onRestartGame={() => props.onRestartGame()}/>
			<h1>HOT or COLD</h1>
		</header>
	)
}