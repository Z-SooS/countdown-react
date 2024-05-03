import React, { useState } from 'react';
import LandingPage from './LandingPage';

function Content() {
    const [isGame, setIsGame] = useState(false);

    if(isGame) {
        return(<>Placeholder</>)
    }

    return(
        <LandingPage startGameFunc={()=>{setIsGame(true)}}/>
    )
}

export default Content;