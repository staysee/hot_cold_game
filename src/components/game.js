import React from 'react';

import Header from './header';
import Feedback from './feedback';
import Guess from './guess';
import GuessWrongNumbers from './guess-wrongnumbers';

export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guesses: [1, 2],
			feedback: 'Make your guess!',
			secretNumber: Math.floor(Math.random() * 100) + 1
		}
	}

	render () {
		const {feedback} = this.state

		return (
			<div>
				<Header />
				<main>
					<Feedback feedback={feedback} />
					<Guess />
					<GuessWrongNumbers guesses={this.state.guesses}/>
				</main>
			</div>
		)
	}
}