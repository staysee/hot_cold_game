import React from 'react';
import './guess-form.css';

import GuessCount from './guess-count';

export default class Guess extends React.Component {

	onSubmit(event){
		event.preventDefault();
		console.log(this.props);
	}


	render (){
		return(
			<section id="guess-form">
				<form onSubmit={e=>this.onSubmit(e)}>
					<input
						type="text" 
						maxLength="3"
						autoComplete="off"
						placeholder="Enter your Guess"
						ref={input => this.input = input}
						required>
					</input>
					<button type="submit">Guess</button>
				</form>
				{/* <GuessCount guessCount={props.guessCount}/> */}
			</section>
		)
	}
}