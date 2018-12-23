import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessWrongNumbers from './guess-wrongnumbers';

export default function GuessBox(props){
    return (
        <Feedback feedback={feedback} />
        <GuessForm guessCount={guessCount} />
        <GuessWrongNumbers guesses={this.state.guesses} />
    );
}