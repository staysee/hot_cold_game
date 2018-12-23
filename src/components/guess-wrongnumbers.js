import React from 'react';

import './guess-wrongnumbers.css';

export default function GuessWrongNumbers(props){
    const guesses = props.guesses.map((guess, index) =>(
        <li key={index}>{guess}</li>
    ))
    return(
        <section id="wrong-numbers">
            <ul>{guesses}</ul>
        </section>
    )
}