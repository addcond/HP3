import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {key} from '../oneKeyToRuleThemAll';
import './styles.css';

function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
            .then(result => result.json())
            .then(vjuh => {
                setCharacters(vjuh)
            })
    }, []
    );

    const charName = characters.map(name => {
        return(
            <div className='char-names' key={name.name}>
                <Link to={'/characters/' + name.name} className='character-link'>
                    {name.name}
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
                {charName}
            </div>
        </>
    )
}

export default Characters;