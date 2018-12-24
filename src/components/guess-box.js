import React from 'react';

import './guess-box.css'

import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessWrongNumbers from './guess-wrongnumbers';

export default function GuessBox(props){
    const {feedback} = props;
    const {guessCount} = props;
    return (
        <section id="guess-box">
            <Feedback feedback={feedback} guessCount={guessCount}/>
            <GuessForm onMakeGuess={guess =>props.onMakeGuess(guess)} />
            <GuessCount guessCount={guessCount}/>
        </section>
    );
}