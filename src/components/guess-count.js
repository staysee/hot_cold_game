import React from 'react';

import './guess-count.css';

export default function GuessCount(props){
    return (
        <section id="guess-count">
            <h3>Guess #<span id="count">{props.guessCount}</span>!</h3>
        </section>
    )
}