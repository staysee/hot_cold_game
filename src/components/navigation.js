import React from 'react';

import './navigation.css';

export default function Navigation(props){
    return(
        <nav>
				<ul>
					<li>WHAT?</li>
                    <li><a 
                            href="#newgame"
                            onClick={() => props.onRestartGame()}>
                            +NEW GAME
                        </a>
                    </li>
				</ul>
			</nav>
    )
}