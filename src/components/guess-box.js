import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessWrongNumbers from './guess-wrongnumbers';

export default function GuessBox(props){
    const {feedback} = props;
    const {guessCount} = props;
    return (
        <section>
            <Feedback feedback={feedback} />
            <GuessForm onMakeGuess={guess =>props.onMakeGuess(guess)} />
            {/* <GuessWrongNumbers guesses={props.guesses} /> */}
            {/* <GuessCount guessCount={props.guessCount}/> */}
        </section>
    );
}