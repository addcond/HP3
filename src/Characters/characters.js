import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {key} from '../key';
import './styles.css';

function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
            .then(result => result.json() )
            .then((vjuh) => {
                setCharacters(vjuh)
            })
    }, []
    );

    const chNames = characters.map(names => {
        return(
            <div className='char-names' key={names.name}>
                <Link to={'/characters/' + names.name} className='character-link'>
                    {names.name}
                </Link>
            </div>
        )
    });

    return (
        <>
            <header>
                <h1 className='title'>Characters</h1>
            </header>
            <div className='chars-list'>
                {chNames}
            </div>
        </>
    )
}

export default Characters;