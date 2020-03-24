import React, {useEffect, useState} from 'react';
import {key} from '../oneKeyToRuleThemAll';
import './styles.css';

function Spells () {

    const [spells, setCharacters] = useState([]);

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
            .then(result => result.json())
            .then(vjuh => {
                setCharacters(vjuh)
            })
    }, []);

    const spellName = spells.map(names => {
        return(
            <div className='spell-container' key={names.id}>
                <div className='names'>
                    {names.spell}
                </div>
                <ul className='spells-list'>
                    <li className='spell-type'>{names.type}</li>
                    <li className='spell-effect'>{names.effect}</li>
                </ul>
            </div>
        )
    });
    return (
        <>
            <header>
                <h1 className='title'>Spells</h1>
            </header>
            <div className='spells-list'>
                {spellName}
            </div>
        </>
    )
}

export default Spells;