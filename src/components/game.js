import React from 'react';

import Header from './header';
import Feedback from './feedback';

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
		return (
			<div>
				<Header />
				<main>
					<Feedback />
					<section>Guess Section</section>
					<section>Wrong Numbers</section>
				</main>
			</div>
		)
	}
}