import React from 'react';

import Header from './header';
import GuessBox from './guess-box';
import GuessWrongNumbers from './guess-wrongnumbers';

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
		if (isNaN(userGuess)){
			feedback = "Guess a number"
			this.setState({
				feedback
			})
			return;
		}
		if (userGuess < 1 || userGuess > 100){
			feedback = "Guess a number between 1-100"
			this.setState({
				feedback
			})
		} else if (this.state.guesses.includes(userGuess)) {
			feedback = "You already guessed that number"
			this.setState({
				feedback
			})
		} else {
			const answer = this.state.secretNumber;
			const difference = Math.abs(userGuess-answer);

			if (difference >= 30){
				feedback = "Cold"
			} else if (difference >= 15){
				feedback = "Warm"
			} else if (difference >= 5){
				feedback = "Hot"
			} else if (difference >= 1){
				feedback = "Very Hot"
			} else {
				feedback = "Correct!"
			}
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, userGuess]
		})
	}


	render () {
		const {feedback, guesses} = this.state;
		const {guessCount} = this.state.guesses.length;

		return (
			<div>
				<Header onRestartGame={() => this.restartGame()} />
				<main>
					<GuessBox 
						feedback={feedback} 
						onMakeGuess={guess => this.makeGuess(guess)} 
						guessCount={this.state.guesses.length}/>
					<GuessWrongNumbers guesses={guesses} />
				</main>
			</div>
		)
	}
}