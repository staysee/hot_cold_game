import React from 'react';
import './guess.css';

import GuessCount from './guess-count';

export default function Guess(props) {

	return(
		<section id="guess-form">
			<form>
				<input type="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required></input>
				<button type="submit">Guess</button>
			</form>
			<GuessCount guessCount={props.guessCount}/>
		</section>
	)
}