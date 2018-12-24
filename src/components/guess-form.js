import React from 'react';
import './guess-form.css';

import GuessCount from './guess-count';

export default class GuessForm extends React.Component {

	onSubmit(event){
		event.preventDefault();
		console.log(this.props.onMakeGuess);
		const userInput = this.input.value;
		this.props.onMakeGuess(userInput);
		console.log(this.input.value);
	}


	render (){
		return(
			<section id="guess-form">
				<form onSubmit={e=>this.onSubmit(e)}>
					<input
						type="text" 
						min="1"
						max="100"
						maxLength="3"
						autoComplete="off"
						placeholder="Enter your Guess"
						ref={input => this.input = input}
						required>
					</input>
					<button type="submit">Guess</button>
				</form>
			</section>
		)
	}
}