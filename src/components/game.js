import React from 'react';

import Header from './header';
import GuessBox from './guess-box';

export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Make your guess!',
			secretNumber: Math.floor(Math.random() * 100) + 1
		}
	}

	restartGame(){
		this.setState({
			guesses: [],
			feedback: 'Make your guess!',
			secretNumber: Math.floor(Math.random() * 100) + 1
		});
	}

	makeGuess(userGuess){
		let feedback;
		if (userGuess === this.state.secretNumber){
			feedback = "You guessed the right number!"
		} else if (userGuess < this.state.secretNumber){
			feedback = "Number is less than the secret number"
		} else if (userGuess > this.state.secretNumber){
			feedback = "Number is more than the secret number"
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, userGuess]
		})
	}


	render () {
		const {feedback, guesses} = this.state;
		const {guessCount} = guesses.length;

		return (
			<div>
				<Header onRestartGame={() => this.restartGame()} />
				<main>
					<GuessBox onMakeGuess={guess => this.makeGuess(guess)}/>
				</main>
			</div>
		)
	}
}