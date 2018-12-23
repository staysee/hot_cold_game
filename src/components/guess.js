import React from 'react';

import './guess.css';


export default function Guess(props) {

	return(
		<div id="guess-form">
			<form>
				<input type="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required></input>
				<button type="submit">Guess</button>
			</form>
		</div>
	)
}