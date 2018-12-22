import React from 'react';

import Header from './header';
import Feedback from './feedback';
import Guess from './guess';

export default class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			guesses: [],
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
					<section>Wrong Numbers</section>
				</main>
			</div>
		)
	}
}