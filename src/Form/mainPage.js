import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Main() {

    return (
        <>
            <div className='grid'>
                <Link to='/characters' className='character-grid'>
                    <div className='container'>
                        <img className='main-image' src='https://i.imgur.com/8nvYkNo.jpg' alt='Characters' />
                        <div className='info'>Characters</div>
                    </div>
                </Link>
                <Link to='/houses' className='house-grid'>
                    <div className='container'>
                        <img className='main-image' src='https://i.imgur.com/Dm2m9wW.jpg' alt='Houses' />
                        <div className='info'>Houses</div>
                    </div>
                </Link>
                <Link to='/spells' className='spell-grid'>
                    <div className='container'>
                        <img className='main-image' src='https://i.imgur.com/AH51ZKA.jpg' alt='Spells' />
                        <div className='info'>Spells</div>
                    </div>
                </Link>
                <Link to='/hat' className='sorting-grid'>
                    <div className='container'>
                        <img className='main-image' src='https://i.imgur.com/RNDfa55.jpg' alt='hat' />
                        <div className='info'>Sorting Hat</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Main;