import React from 'react';
import TitleComponent from './screen-elements/TitleComponent';

function LandingPage({startGameFunc}) {
    return ( <section id='landing-page'>
        <h1 id='title'>
            <TitleComponent/>sadasd
        </h1>
        <div id='game-explanation'>
            <h4>"Countdown" is a popular British television game show that combines word and number puzzles.</h4>
            <h5>Letter round: Select 9 consonants and vowels. Find the longest word you can form in 30 seconds</h5>
            <h5>Number round: Select 6 small and big numbers. Try to get closest to the target number by basic arithmetic operations. (+, -, /, *)</h5>
        </div>
        <button id='start-button' onClick={startGameFunc}>
            PLAY
        </button>
    </section> );
}

export default LandingPage;