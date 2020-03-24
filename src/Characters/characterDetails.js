import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {key} from '../oneKeyToRuleThemAll';
import './styles.css';

function CharacterDetails(props) {

    const [characterDetails, setCharacterDetails] = useState([]);
    const properName = props.match.params.character.replace();

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}&name=${properName}`)
            .then(result => result.json())
            .then(vjuh => {
                setCharacterDetails(vjuh)
            })
    }, [properName]
    );

    if (characterDetails.length === 0) {
        return(
            <div className='loading'>
                processing
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='character-title'>{characterDetails[0].name}</h1>
                <span>
                    <Link to='/characters' className='link-back'>
                        Back to characters
                    </Link>
                </span>
            </header>
            <div className='characters-box'>
                <img className='potential-img' src='https://i.pinimg.com/736x/12/26/ee/1226ee007e9b9d904b6caef9aac47539--the-funniest-stock-photos.jpg' alt='me' />
                <div className='char-info'>
                    <h3>Information:</h3>
                    <p>School: {characterDetails[0].school || 'unknown'}</p>
                    <p>House: {characterDetails[0].house || 'unknown'}</p>
                    <p>Alignment: {characterDetails[0].role || 'unknown'}</p>
                    <p>Status: {characterDetails[0].bloodStatus || 'unknown'}</p>
                    <p>Race: {characterDetails[0].species || 'unknown'}</p>
                    <p>{'Is ' && characterDetails[0].deathEater}</p>
                    <p>{'Belongs to ' && characterDetails[0].dumbledoresArmy}</p>
                    <p>{'Belongs to ' && characterDetails[0].orderOfThePhoenix}</p>
                    <p>{'Is ' && characterDetails[0].ministryOfMagic}</p>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails;